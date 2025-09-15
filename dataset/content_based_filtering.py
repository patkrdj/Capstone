import pandas as pd
import numpy as np
from scipy.sparse import csr_matrix
import warnings
import os
import pymysql
from contextlib import contextmanager
warnings.filterwarnings('ignore')


@contextmanager
def get_mysql_connection():
	"""MySQL 연결 생성"""
	conn = pymysql.connect(
		host='13.58.174.167',
		port=3306,
		user='admin',
		password='Admin1234@',
		database='lapisbluedb',
		charset='utf8mb4',
		autocommit=True
	)
	try:
		yield conn
	finally:
		conn.close()


class SalesBasedFiltering:
	def __init__(self, movies_file='ml-latest-small/movies.csv'):
		"""
		Sales 기반 콘텐츠 필터링 클래스 (데이터베이스 직접 연동)

		Args:
			movies_file: 영화 정보 파일 경로
		"""
		self.movies_file = movies_file
		self.ratings_df = None
		self.movies_df = None

		self.sale_index_to_id = None  # list[int saleId] aligned to row index
		self.sale_index_to_movie_id = None  # list[int movieId] aligned to row index
		self.sale_index_by_movie_id = None  # dict[int movieId -> list[int sale_row_index]]
		
		self.token_to_index = None
		self.index_to_token = None
		self.idf_vector = None
		self.item_feature_matrix = None  # csr_matrix (num_sales x num_features)

	def load_data(self):
		"""데이터베이스에서 평점 데이터 및 영화 데이터 로드"""
		print("데이터베이스 reviews 테이블에서 평점 데이터를 로드하는 중...")
		self.ratings_df = self._load_ratings_from_database()
		
		if self.ratings_df is not None and not self.ratings_df.empty:
			print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
			print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
			print(f"영화 수: {self.ratings_df['movieId'].nunique()}개")
		else:
			print("❌ 데이터베이스에서 평점 데이터를 로드할 수 없습니다.")
			raise Exception("데이터베이스 연결을 확인하거나 reviews 테이블에 데이터가 있는지 확인해주세요.")
		
		print("영화 데이터를 로드하는 중...")
		if os.path.exists(self.movies_file):
			self.movies_df = pd.read_csv(self.movies_file)
			print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
		else:
			print(f"영화 데이터 파일을 찾을 수 없습니다: {self.movies_file}")
			self.movies_df = None

	def _load_ratings_from_database(self):
		"""데이터베이스 reviews 테이블에서 평점 데이터 로드"""
		try:
			with get_mysql_connection() as conn:
				query = """
				SELECT 
					r.user_id as userId,
					s.movie_id as movieId,
					r.rating as rating,
					UNIX_TIMESTAMP(r.created_at) as timestamp
				FROM reviews r
				LEFT JOIN sales s ON r.sales_id = s.id
				WHERE s.movie_id IS NOT NULL
				ORDER BY r.user_id, r.sales_id
				"""
				
				ratings_df = pd.read_sql(query, con=conn)
				
				if ratings_df.empty:
					print("⚠️ Reviews 테이블에서 데이터를 찾을 수 없습니다.")
					return None
				
				# 데이터 타입 확인 및 정리
				ratings_df['userId'] = ratings_df['userId'].astype(int)
				ratings_df['movieId'] = ratings_df['movieId'].astype(int)
				ratings_df['rating'] = ratings_df['rating'].astype(float)
				ratings_df['timestamp'] = ratings_df['timestamp'].fillna(0).astype(int)
				
				print(f"✅ Reviews 테이블에서 {len(ratings_df)}개 평점 로드 완료")
				return ratings_df
				
		except Exception as e:
			print(f"❌ 데이터베이스 평점 로드 오류: {e}")
			return None

	def _price_bucket(self, price):
		"""가격을 만원 단위 버킷으로 변환"""
		if pd.isna(price):
			return None

		try:
			p = int(price)
		except Exception:
			return None

		if p < 10000:
			return 'price:<1만'
		band = p // 10000
		return f'price:{band}만대'

	def create_sales_feature_matrix(self, min_df=2, use_log_tf=True):
		"""
		Sales 메타데이터 기반 TF-IDF 특성 행렬 생성 (quality/price/region/site/limited)

		Args:
			min_df: 토큰 최소 문서 빈도
			use_log_tf: 로그 TF 사용 여부
		"""
		print("MySQL에서 sales 메타데이터를 로드하는 중...")

		query = (
			"SELECT id, movie_id, site_name, price, quality, region_code, is_limited_edition "
			"FROM sales"
		)
		with get_mysql_connection() as conn:
			df = pd.read_sql(query, con=conn)
		if df.empty:
			raise RuntimeError("sales 테이블이 비어 있습니다.")

		# 인덱스/매핑 초기화
		sale_ids = df['id'].astype(int).tolist()
		self.sale_index_to_id = sale_ids

		# movie_id -> sale row indices 매핑 구성
		self.sale_index_by_movie_id = {}
		self.sale_index_to_movie_id = []
		for idx, row in df.iterrows():
			mid = int(row['movie_id']) if not pd.isna(row['movie_id']) else None
			self.sale_index_to_movie_id.append(mid)
			if mid is not None:
				self.sale_index_by_movie_id.setdefault(mid, []).append(idx)
		

		# 토큰 수집
		item_tokens_list = []
		df_counter = {}
		for _, row in df.iterrows():
			tokens = {}
			# quality
			q = row.get('quality')
			if pd.notna(q) and str(q).strip():
				key = f"quality:{str(q).strip()}"
				tokens[key] = tokens.get(key, 0) + 1
			# region
			r = row.get('region_code')
			if pd.notna(r) and str(r).strip():
				key = f"region:{str(r).strip()}"
				tokens[key] = tokens.get(key, 0) + 1
			# site
			site = row.get('site_name')
			if pd.notna(site) and str(site).strip():
				key = f"site:{str(site).strip().lower()}"
				tokens[key] = tokens.get(key, 0) + 1
			# limited
			limited = row.get('is_limited_edition')
			if pd.notna(limited):
				key = f"limited:{'yes' if bool(limited) else 'no'}"
				tokens[key] = tokens.get(key, 0) + 1
			# price bucket (만원 단위)
			bucket = self._price_bucket(row.get('price'))
			if bucket:
				tokens[bucket] = tokens.get(bucket, 0) + 1

			item_tokens_list.append(tokens)
			for tok in tokens.keys():
				df_counter[tok] = df_counter.get(tok, 0) + 1

		# 어휘집/IDF
		num_items = len(sale_ids)
		valid_tokens = [tok for tok, dfv in df_counter.items() if dfv >= min_df]
		valid_tokens.sort()
		self.token_to_index = {tok: idx for idx, tok in enumerate(valid_tokens)}
		self.index_to_token = {idx: tok for tok, idx in self.token_to_index.items()}

		idf = np.zeros(len(self.token_to_index), dtype=np.float32)
		for tok, idx in self.token_to_index.items():
			df_v = df_counter.get(tok, 0)
			idf[idx] = np.log((1.0 + num_items) / (1.0 + df_v)) + 1.0
		self.idf_vector = idf

		# CSR 구성
		rows, cols, data = [], [], []
		for row_idx, token_counts in enumerate(item_tokens_list):
			for tok, tf in token_counts.items():
				col_idx = self.token_to_index.get(tok)
				if col_idx is None:
					continue
				val_tf = (1.0 + np.log(tf)) if use_log_tf else float(tf)
				rows.append(row_idx)
				cols.append(col_idx)
				data.append(val_tf)

		matrix = csr_matrix((np.array(data, dtype=np.float32), (np.array(rows), np.array(cols))),
			shape=(num_items, len(self.token_to_index)), dtype=np.float32)
		matrix = matrix.multiply(self.idf_vector)
		row_norms = np.asarray(np.sqrt(matrix.multiply(matrix).sum(axis=1))).ravel()
		row_norms[row_norms == 0.0] = 1.0
		inv = 1.0 / row_norms
		matrix = matrix.multiply(inv.reshape(-1, 1))

		self.item_feature_matrix = matrix
		print(f"특성 행렬 크기: {self.item_feature_matrix.shape} (sales x 토큰)")

	def _build_user_profile_vector(self, user_id):
		"""사용자 프로필 벡터 생성 (평점 가중 합)"""
		if user_id not in set(self.ratings_df['userId'].unique().tolist()):
			return None

		user_ratings = self.ratings_df[self.ratings_df['userId'] == user_id][['movieId', 'rating']]
		user_ratings['movieId'] = user_ratings['movieId'].astype(int)

		# 사용자 평균 중심화 가중치 (모든 평점이 같으면 평점값 사용)
		user_mean = user_ratings['rating'].mean()
		user_ratings['weight'] = user_ratings['rating'] - user_mean
		
		# 모든 평점이 같아서 가중치가 0이 되는 경우, 평점 자체를 가중치로 사용
		if (user_ratings['weight'] == 0).all():
			user_ratings['weight'] = user_ratings['rating']

		# 영화 인덱스 정렬 및 가중치 벡터 생성
		indices = []
		weights = []
		for _, r in user_ratings.iterrows():
			mid = int(r['movieId'])
			w = float(r['weight'])
			if w == 0.0:
				continue
			
			# 영화에 연결된 모든 sales 행에 가중치를 균등 분배
			row_indices = self.sale_index_by_movie_id.get(mid, [])
			if not row_indices:
				continue
			share = w / float(len(row_indices))
			for idx in row_indices:
				indices.append(int(idx))
				weights.append(share)

		if not indices:
			return None

		# 가중 합: w^T * M  (1 x F)
		w_vec = np.zeros(self.item_feature_matrix.shape[0], dtype=np.float32)
		w_vec[np.array(indices, dtype=int)] = np.array(weights, dtype=np.float32)
		profile = w_vec @ self.item_feature_matrix  # dense(1 x F)

		# L2 정규화
		norm = np.linalg.norm(profile)
		if norm == 0.0:
			return None
		return (profile / norm).astype(np.float32)

	def recommend_sales(self, user_id, n_recommendations=10, min_score=0.0):
		"""
		특정 사용자에게 sales 추천 (콘텐츠 기반)

		Args:
			user_id: 사용자 ID
			n_recommendations: 추천할 sales 수
			min_score: 최소 유사도 임계값
		"""
		print(f"사용자 {user_id}에게 sales를 추천하는 중...")

		profile = self._build_user_profile_vector(user_id)
		if profile is None:
			return []

		# 모든 sales에 대한 코사인 유사도 점수 (행이 L2정규화되어 있으므로 내적 == 코사인)
		scores = self.item_feature_matrix @ profile.reshape(-1, 1)
		scores = np.asarray(scores).ravel()

		candidates = []
		for row_idx, score in enumerate(scores):
			mid = self.sale_index_to_movie_id[row_idx]
			if score >= min_score:
				candidates.append((row_idx, mid, float(score)))

		candidates.sort(key=lambda x: x[2], reverse=True)
		selected = candidates[:n_recommendations]

		result = []
		for row_idx, mid, sc in selected:
			result.append({
				'saleId': self.sale_index_to_id[row_idx],
				'movieId': mid,
				'relevance': round(sc, 4)
			})

		return result

	def evaluate_recommendations(self, user_id, n_recommendations=10):
		"""추천 결과 요약 출력"""
		recommendations = self.recommend_sales(user_id, n_recommendations=n_recommendations)
		print(f"\n=== 사용자 {user_id} Sales 기반 추천 결과 ===")
		print(f"추천 sales 수: {len(recommendations)}")
		if recommendations:
			print("\n추천 sales 목록:")
			for i, rec in enumerate(recommendations, 1):
				print(f"{i:2d}. saleId={rec['saleId']}, movieId={rec.get('movieId')}")
				print(f"    유사도: {rec['relevance']}")
				print()
		else:
			print("추천할 sales가 없습니다.")
		return recommendations

	def search_movie_by_title(self, title_query):
		raise NotImplementedError("영화 검색 기능은 제거되었습니다 (블루레이 추천만 지원).")

	def get_movie_by_id(self, movie_id):
		raise NotImplementedError("영화 조회 기능은 제거되었습니다 (블루레이 추천만 지원).")

	def recommend_similar_movies(self, movie_title_or_id, n_recommendations=10, min_score=0.0):
		raise NotImplementedError("영화 유사도 추천 기능은 제거되었습니다 (블루레이 추천만 지원).")

	def evaluate_movie_recommendations(self, movie_title_or_id, n_recommendations=10):
		raise NotImplementedError("영화 기반 추천 결과 출력 기능은 제거되었습니다 (블루레이 추천만 지원).")

	def find_best_sales_for_movies(self, movie_recommendations, user_id, top_n=None):
		"""
		Content-based filtering으로 추천받은 영화 리스트에 대해 각 영화의 최적 블루레이(sales) 찾기
		사용자의 과거 구매/평가 패턴을 분석해서 메타데이터가 유사한 블루레이를 추천
		
		Args:
			movie_recommendations: 영화 추천 리스트 [(movie_id, title, predicted_rating, personalized_score, avg_rating), ...]
			user_id: 사용자 ID (content-based 프로필 생성용)
			top_n: 상위 N개 블루레이만 반환 (None이면 모든 영화에서 블루레이 찾기)
			
		Returns:
			list: 각 영화의 최적 sales 정보 (top_n이 지정되면 상위 N개만)
		"""
		total_movies = len(movie_recommendations)
		result_count = top_n if top_n else total_movies
		
		print(f"\n=== Content-based Filtering으로 영화 {total_movies}개 → 상위 {result_count}개 블루레이 추천 ===")
		print(f"사용자 ID: {user_id}")
		
		# 사용자 프로필 벡터 생성 (이미 평가한 sales 기반)
		user_profile = self._build_user_profile_vector(user_id)
		if user_profile is None:
			raise RuntimeError(f"사용자 {user_id}의 프로필이 존재하지 않습니다. 유저 프로필을 먼저 생성하세요.")
		
		print(f"✅ 사용자 프로필 벡터 생성 완료 (차원: {len(user_profile)})")
		
		results = []
		movies_with_sales = 0
		
		try:
			for i, movie_rec in enumerate(movie_recommendations, 1):
				movie_id = movie_rec[0]
				movie_title = movie_rec[1]
				# SVD 예측 평점은 사용하지 않음 (순수 콘텐츠 기반)
				
				# 해당 영화의 sales들을 content-based filtering으로 추천
				best_sale_info = self._recommend_sale_for_movie(movie_id, user_profile)
				
				if best_sale_info is None:
					# Sales가 없는 영화는 낮은 점수로 처리 (유사도만 사용)
					results.append({
						'movie_id': movie_id,
						'movie_title': movie_title,
						'best_sale': None,
						'similarity_score': -1.0,
						'reason': 'No bluray sales available'
					})
					continue
				
				movies_with_sales += 1
				best_sale, similarity_score, reason = best_sale_info
				
				results.append({
					'movie_id': movie_id,
					'movie_title': movie_title,
					'available_sales': best_sale.get('total_sales', 1) if best_sale else 0,
					'best_sale': best_sale,
					'similarity_score': similarity_score,
					'reason': reason
				})
		
		except Exception as e:
			print(f"추천 과정 중 오류: {e}")
			return []
		
		print(f"✅ Content-based 추천 완료: {movies_with_sales}/{len(movie_recommendations)}개 영화에서 블루레이 발견")
		
		# 상위 N개만 반환하는 경우
		if top_n is not None:
			print(f"🔝 유사도 기준으로 상위 {top_n}개 블루레이 선별 중...")
			# 유사도 기준으로 정렬
			results.sort(key=lambda x: x['similarity_score'], reverse=True)
			results = results[:top_n]
			
			# 실제 블루레이가 있는 것들만 카운트
			actual_bluray_count = len([r for r in results if r.get('best_sale') is not None])
			print(f"✅ 상위 {top_n}개 선별 완료 (블루레이 있음: {actual_bluray_count}개)")
		
		return results

	def _recommend_sale_for_movie(self, movie_id, user_profile):
		"""
		특정 영화의 sales 중에서 사용자 프로필과 가장 유사한 것을 content-based filtering으로 추천
		
		Args:
			movie_id: 영화 ID
			user_profile: 사용자 프로필 벡터
			
		Returns:
			tuple: (best_sale, similarity_score, reason) 또는 None
		"""
		# 해당 영화의 sales 인덱스들 찾기
		if movie_id not in self.sale_index_by_movie_id:
			return None
		
		sale_indices = self.sale_index_by_movie_id[movie_id]
		if not sale_indices:
			return None
		
		best_sale = None
		best_score = -1
		best_reason = ""
		
		try:
			with get_mysql_connection() as conn:
				for sale_idx in sale_indices:
					sale_id = self.sale_index_to_id[sale_idx]
					
					# 해당 sales의 특성 벡터 추출
					sale_features = self.item_feature_matrix[sale_idx].toarray().ravel()
					
					# 사용자 프로필과의 코사인 유사도 계산
					similarity = np.dot(user_profile, sale_features)
					
					if similarity > best_score:
						best_score = similarity
						
						# 해당 sale의 상세 정보 조회
						query = """
						SELECT s.id, s.price, s.quality, s.region_code, s.is_limited_edition, 
							   s.site_name, s.bluray_title, s.site_url
						FROM sales s
						WHERE s.id = %s
						"""
						cursor = conn.cursor(pymysql.cursors.DictCursor)
						cursor.execute(query, (sale_id,))
						best_sale = cursor.fetchone()
						cursor.close()
						
						if best_sale:
							best_sale['total_sales'] = len(sale_indices)
							best_reason = self._get_content_based_reason(best_sale, similarity)
				
				return (best_sale, best_score, best_reason) if best_sale else None
				
		except Exception as e:
			print(f"Sales 추천 중 오류: {e}")
			return None

	def _default_sales_recommendation(self, movie_recommendations, top_n=None):
		"""
		사용자 프로필이 없을 때 사용하는 기본 추천 방식 (화질 우선, 가격 고려)
		
		Args:
			movie_recommendations: 영화 추천 리스트
			top_n: 상위 N개 블루레이만 반환 (None이면 모든 영화)
		"""
		raise RuntimeError("기본 sales 추천 로직은 제거되었습니다. 사용자 프로필이 필요합니다.")

	def _get_content_based_reason(self, sale, similarity_score):
		"""Content-based filtering 선택 이유 생성"""
		if not sale:
			return "No sales available"
		
		reasons = []
		
		# 유사도 점수
		reasons.append(f"유사도 {similarity_score:.3f}")
		
		# 화질
		quality = sale.get('quality', '').upper()
		if '4' in quality or 'U' in quality:
			reasons.append("4K 화질")
		elif 'H' in quality or 'B' in quality:
			reasons.append("HD 화질")
		else:
			reasons.append("SD 화질")
		
		# 가격
		price = sale.get('price', 0)
		if price > 0:
			reasons.append(f"{price:,}원")
		
		# 리미티드 에디션
		if sale.get('is_limited_edition'):
			reasons.append("한정판")
		
		# 지역
		if sale.get('region_code') == 1:
			reasons.append("국내판")
		else:
			reasons.append("수입판")
		
		return ", ".join(reasons)

	def display_movie_sales_recommendations(self, results, show_details=True, max_display=20):
		"""Content-based filtering 추천 결과를 보기 좋게 출력"""
		if not results:
			print("추천 결과가 없습니다.")
			return
		
		print(f"\n=== Content-based Filtering 블루레이 추천 결과 (순수 콘텐츠 기반) ===")
		print(f"{'순위':<4} {'영화 제목':<35} {'유사도':<8} {'Sale ID':<8} {'가격':<10} {'화질':<8} {'선택 이유':<25}")
		print("-" * 150)
		
		displayed = 0
		for i, result in enumerate(results, 1):
			if displayed >= max_display:
				print(f"\n... 총 {len(results)}개 중 상위 {max_display}개만 표시됨")
				break
			
			movie_title = result['movie_title'][:32] + "..." if len(result['movie_title']) > 35 else result['movie_title']
			similarity_score = result.get('similarity_score', 0.0)
			
			best_sale = result.get('best_sale')
			if best_sale:
				sale_id = best_sale.get('id', 'N/A')
				price = f"{best_sale.get('price', 0):,}원" if best_sale.get('price') else "N/A"
				quality = best_sale.get('quality', 'N/A')
				reason = result.get('reason', '')[:25]
				
				print(f"{i:<4} {movie_title:<35} {similarity_score:<8.3f} {sale_id:<8} {price:<10} {quality:<8} {reason:<25}")
				displayed += 1
			else:
				print(f"{i:<4} {movie_title:<35} {similarity_score:<8.3f} {'N/A':<8} {'N/A':<10} {'N/A':<8} {'블루레이 없음':<25}")
		
		# 통계 정보
		sales_available = len([r for r in results if r.get('best_sale')])
		print(f"\n📊 Content-based 추천 통계 (순수 콘텐츠 기반):")
		print(f"   블루레이 판매 중인 영화: {sales_available}/{len(results)}개")
		if sales_available > 0:
			avg_price = np.mean([r['best_sale']['price'] for r in results if r.get('best_sale') and r['best_sale'].get('price')])
			avg_similarity = np.mean([r['similarity_score'] for r in results if r.get('best_sale')])
			print(f"   평균 추천 가격: {avg_price:,.0f}원")
			print(f"   평균 유사도 점수: {avg_similarity:.3f}")
		
		return results




def main():
	"""메인 실행 함수 (데이터베이스 직접 연동)"""
	print("=== Content-based Filtering 시스템 (Database 직접 연동) ===")
	print("📊 데이터베이스 reviews 테이블에서 평점 데이터를 직접 로드합니다.")
	
	# 파이프라인 구동
	try:
		sbf = SalesBasedFiltering()
		sbf.load_data()  # 데이터베이스에서 reviews 테이블 로드
		sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
	except Exception as e:
		print(f"❌ 시스템 초기화 실패: {e}")
		return

	print("\n" + "="*80)
	print("영화 추천 시스템")
	print("="*80)
	print("1. 영화 제목으로 비슷한 영화 찾기")
	print("2. 사용자 기반 추천 (기존 기능)")
	print("3. 종료")
	
	while True:
		try:
			choice = input("\n선택하세요 (1-3): ").strip()
			
			if choice == '1':
				# 영화 제목 입력 받기
				movie_query = input("\n추천받을 영화 제목을 입력하세요: ").strip()
				if movie_query:
					print(f"\n'{movie_query}'와 비슷한 영화를 찾는 중...")
					sbf.evaluate_movie_recommendations(movie_query, n_recommendations=10)
				else:
					print("영화 제목을 입력해주세요.")
					
			elif choice == '2':
				# 기존 사용자 기반 추천
				try:
					user_id = int(input("\n사용자 ID를 입력하세요: ").strip())
					sbf.evaluate_recommendations(user_id, n_recommendations=10)
				except ValueError:
					print("올바른 사용자 ID를 입력해주세요.")
					
			elif choice == '3':
				print("\n프로그램을 종료합니다.")
				break
				
			else:
				print("1, 2, 또는 3을 선택해주세요.")
				
		except KeyboardInterrupt:
			print("\n\n프로그램이 중단되었습니다.")
			break
		except Exception as e:
			print(f"오류가 발생했습니다: {e}")

def demo_movie_recommendations():
	"""영화 추천 데모 함수 (데이터베이스 직접 연동)"""
	print("=== 영화 추천 데모 (Database 직접 연동) ===")

	# 시스템 초기화
	try:
		sbf = SalesBasedFiltering()
		sbf.load_data()  # 데이터베이스에서 reviews 테이블 로드
		sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
	except Exception as e:
		print(f"❌ 시스템 초기화 실패: {e}")
		return

	# 테스트 영화들
	test_movies = [
		"Toy Story",
		"Matrix",
		"Star Wars",
		"Inception",
		"Avengers"
	]

	print("\n" + "="*60)
	print("영화 기반 추천 데모")
	print("="*60)

	for movie_title in test_movies:
		print(f"\n{'='*40}")
		print(f"'{movie_title}' 기반 추천")
		print(f"{'='*40}")
		try:
			recommendations = sbf.recommend_similar_movies(movie_title, n_recommendations=5)
			if recommendations:
				for i, rec in enumerate(recommendations, 1):
					print(f"{i}. {rec['title']} (유사도: {rec['similarity']})")
			else:
				print("추천 결과가 없습니다.")
		except Exception as e:
			print(f"오류 발생: {e}")
		print("-" * 40)


if __name__ == "__main__":
	main()