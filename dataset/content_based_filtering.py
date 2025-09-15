import pandas as pd
import numpy as np
from scipy.sparse import csr_matrix
import warnings
import os
import pymysql
warnings.filterwarnings('ignore')


def get_mysql_connection():
	"""MySQL 연결 생성"""
	return pymysql.connect(
		host='13.58.174.167',
		port=3306,
		user='admin',
		password='Admin1234@',
		database='lapisbluedb',
		charset='utf8mb4',
		autocommit=True
	)


class SalesBasedFiltering:
	def __init__(self, ratings_file, movies_file='ml-latest-small/movies.csv'):
		"""
		Sales 기반 콘텐츠 필터링 클래스 (sales 메타데이터 TF-IDF 기반)

		Args:
			ratings_file: 평점 데이터 파일 경로
			movies_file: 영화 정보 파일 경로
		"""
		self.ratings_file = ratings_file
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
		"""평점 데이터 및 영화 데이터 로드"""
		print("평점 데이터를 로드하는 중...")
		self.ratings_df = pd.read_csv(self.ratings_file)
		print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
		print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
		
		print("영화 데이터를 로드하는 중...")
		if os.path.exists(self.movies_file):
			self.movies_df = pd.read_csv(self.movies_file)
			print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
		else:
			print(f"영화 데이터 파일을 찾을 수 없습니다: {self.movies_file}")
			self.movies_df = None

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
		"""
		영화 제목으로 영화 검색
		
		Args:
			title_query: 검색할 영화 제목 (부분 검색 가능)
			
		Returns:
			list: 매칭되는 영화들의 정보 (movieId, title, genres)
		"""
		if self.movies_df is None:
			print("영화 데이터가 로드되지 않았습니다.")
			return []
		
		# 대소문자 구분 없이 부분 검색
		matches = self.movies_df[
			self.movies_df['title'].str.contains(title_query, case=False, na=False)
		].copy()
		
		if matches.empty:
			print(f"'{title_query}'와 일치하는 영화를 찾을 수 없습니다.")
			return []
		
		print(f"'{title_query}' 검색 결과: {len(matches)}개 영화")
		return matches.to_dict('records')

	def get_movie_by_id(self, movie_id):
		"""
		movie_id로 영화 정보 조회
		
		Args:
			movie_id: 영화 ID
			
		Returns:
			dict: 영화 정보 또는 None
		"""
		if self.movies_df is None:
			return None
			
		movie = self.movies_df[self.movies_df['movieId'] == movie_id]
		if movie.empty:
			return None
			
		return movie.iloc[0].to_dict()

	def recommend_similar_movies(self, movie_title_or_id, n_recommendations=10, min_score=0.0):
		"""
		특정 영화와 비슷한 영화들을 추천
		
		Args:
			movie_title_or_id: 영화 제목 또는 movie_id
			n_recommendations: 추천할 영화 수
			min_score: 최소 유사도 임계값
			
		Returns:
			list: 추천 영화 목록
		"""
		# movie_id 찾기
		target_movie_id = None
		target_movie = None
		
		if isinstance(movie_title_or_id, int):
			# movie_id로 직접 조회
			target_movie_id = movie_title_or_id
			target_movie = self.get_movie_by_id(target_movie_id)
			if target_movie is None:
				print(f"Movie ID {target_movie_id}를 찾을 수 없습니다.")
				return []
		else:
			# 영화 제목으로 검색
			search_results = self.search_movie_by_title(movie_title_or_id)
			if not search_results:
				return []
			
			# 첫 번째 검색 결과 사용 (여러 개가 있으면 선택 메뉴 제공)
			if len(search_results) > 1:
				print("\n여러 영화가 검색되었습니다:")
				for i, movie in enumerate(search_results[:5], 1):
					print(f"{i}. {movie['title']} (ID: {movie['movieId']})")
				
				try:
					choice = int(input("\n선택할 영화 번호를 입력하세요 (1-5): ")) - 1
					if 0 <= choice < min(len(search_results), 5):
						target_movie = search_results[choice]
						target_movie_id = target_movie['movieId']
					else:
						print("잘못된 선택입니다. 첫 번째 영화를 선택합니다.")
						target_movie = search_results[0]
						target_movie_id = target_movie['movieId']
				except ValueError:
					print("잘못된 입력입니다. 첫 번째 영화를 선택합니다.")
					target_movie = search_results[0]
					target_movie_id = target_movie['movieId']
			else:
				target_movie = search_results[0]
				target_movie_id = target_movie['movieId']
		
		print(f"\n기준 영화: {target_movie['title']} (ID: {target_movie_id})")
		
		# 해당 영화의 sales가 있는지 확인
		if target_movie_id not in self.sale_index_by_movie_id:
			print("해당 영화의 sales 데이터가 없어 비슷한 영화를 찾을 수 없습니다.")
			return []
		
		# 해당 영화의 모든 sales 행의 특성 벡터 평균 계산
		target_indices = self.sale_index_by_movie_id[target_movie_id]
		target_features = self.item_feature_matrix[target_indices].mean(axis=0)
		target_features = np.asarray(target_features).ravel()
		
		# L2 정규화
		norm = np.linalg.norm(target_features)
		if norm == 0.0:
			print("해당 영화의 특성 정보가 없습니다.")
			return []
		target_features = target_features / norm
		
		# 모든 영화에 대한 유사도 계산
		movie_scores = {}
		for row_idx in range(self.item_feature_matrix.shape[0]):
			mid = self.sale_index_to_movie_id[row_idx]
			if mid == target_movie_id or mid is None:
				continue
				
			# 코사인 유사도 계산
			item_features = self.item_feature_matrix[row_idx].toarray().ravel()
			score = np.dot(target_features, item_features)
			
			if score >= min_score:
				if mid not in movie_scores or score > movie_scores[mid]:
					movie_scores[mid] = score
		
		# 점수순으로 정렬
		sorted_movies = sorted(movie_scores.items(), key=lambda x: x[1], reverse=True)
		
		# 상위 n개 선택
		recommendations = []
		for movie_id, score in sorted_movies[:n_recommendations]:
			movie_info = self.get_movie_by_id(movie_id)
			if movie_info:
				recommendations.append({
					'movieId': movie_id,
					'title': movie_info['title'],
					'genres': movie_info.get('genres', ''),
					'similarity': round(score, 4)
				})
		
		return recommendations

	def evaluate_movie_recommendations(self, movie_title_or_id, n_recommendations=10):
		"""영화 기반 추천 결과 요약 출력"""
		recommendations = self.recommend_similar_movies(movie_title_or_id, n_recommendations=n_recommendations)
		
		if recommendations:
			print(f"\n=== 비슷한 영화 추천 결과 ===")
			print(f"추천 영화 수: {len(recommendations)}")
			print("\n추천 영화 목록:")
			for i, rec in enumerate(recommendations, 1):
				print(f"{i:2d}. {rec['title']} (ID: {rec['movieId']})")
				print(f"    장르: {rec['genres']}")
				print(f"    유사도: {rec['similarity']}")
				print()
		else:
			print("추천할 영화가 없습니다.")
		
		return recommendations




def main():
	"""메인 실행 함수"""
	# 미리 생성된 sales 기반 평점 CSV 파일 사용
	ratings_file = 'sales_ratings.csv'
	
	# 파일이 없으면 생성하라는 메시지 출력
	if not os.path.exists(ratings_file):
		print(f"평점 파일이 없습니다: {ratings_file}")
		print("먼저 generate_sales_ratings.py를 실행하여 평점 데이터를 생성하세요.")
		return

	# 파이프라인 구동
	sbf = SalesBasedFiltering(ratings_file)
	sbf.load_data()
	sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)

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
	"""영화 추천 데모 함수"""
	ratings_file = 'sales_ratings.csv'
	
	if not os.path.exists(ratings_file):
		print(f"평점 파일이 없습니다: {ratings_file}")
		print("먼저 generate_sales_ratings.py를 실행하여 평점 데이터를 생성하세요.")
		return

	# 시스템 초기화
	sbf = SalesBasedFiltering(ratings_file)
	sbf.load_data()
	sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)

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