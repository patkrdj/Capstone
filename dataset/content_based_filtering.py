import pandas as pd
import numpy as np
from scipy.sparse import csr_matrix
import warnings
warnings.filterwarnings('ignore')


class ContentBasedFiltering:
	def __init__(self, ratings_file, movies_file, tags_file=None):
		"""
		콘텐츠 기반 필터링 클래스 (장르/태그 TF-IDF 기반)

		Args:
			ratings_file: 평점 데이터 파일 경로
			movies_file: 영화 정보 파일 경로
			tags_file: 태그 데이터 파일 경로 (선택)
		"""
		self.ratings_file = ratings_file
		self.movies_file = movies_file
		self.tags_file = tags_file

		self.ratings_df = None
		self.movies_df = None
		self.tags_df = None

		self.movie_index_to_id = None
		self.movie_id_to_index = None
		self.token_to_index = None
		self.index_to_token = None
		self.idf_vector = None

		self.item_feature_matrix = None  # csr_matrix (num_movies x num_features)

	def load_data(self):
		"""데이터 로드"""
		print("데이터를 로드하는 중...")
		self.ratings_df = pd.read_csv(self.ratings_file)
		self.movies_df = pd.read_csv(self.movies_file)
		if self.tags_file is not None:
			self.tags_df = pd.read_csv(self.tags_file)
		else:
			# tags.csv 경로가 생략되었다면 기본 경로 추정
			try:
				self.tags_df = pd.read_csv("./ml-latest-small/tags.csv")
			except Exception:
				self.tags_df = None

		print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
		print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
		print(f"태그 데이터: {0 if self.tags_df is None else self.tags_df.shape[0]}개 태그")
		print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")

	def _tokenize_genres(self, genres_str):
		if pd.isna(genres_str):
			return []
		genres = [g.strip().lower() for g in str(genres_str).split('|') if g and g != '(no genres listed)']
		return genres

	def _tokenize_tag(self, tag_str):
		if pd.isna(tag_str):
			return None
		return str(tag_str).strip().lower()

	def create_item_feature_matrix(self, min_df=2, use_log_tf=True):
		"""
		영화별 TF-IDF 특성 행렬 생성 (장르 + 태그)

		Args:
			min_df: 토큰 최소 문서 빈도(등장 영화 수) 임계값
			use_log_tf: TF를 로그 스케일(1 + log(tf))로 변환할지 여부
		"""
		print("콘텐츠 특성 행렬을 생성하는 중...")

		movie_ids = self.movies_df['movieId'].astype(int).tolist()
		self.movie_index_to_id = movie_ids
		self.movie_id_to_index = {mid: idx for idx, mid in enumerate(movie_ids)}

		# 1) 각 영화의 토큰 수집
		movie_tokens_list = []  # list[dict[token] -> count]
		df_counter = {}  # token -> document frequency

		# 태그를 영화 기준으로 미리 집계
		tags_by_movie = None
		if self.tags_df is not None:
			# 동일 영화에서 동일 태그가 여러 번 등장하면 그만큼 TF에 반영
			self.tags_df['movieId'] = self.tags_df['movieId'].astype(int)
			tmp = self.tags_df.copy()
			tmp['tag'] = tmp['tag'].apply(self._tokenize_tag)
			tmp = tmp.dropna(subset=['tag'])
			tags_by_movie = tmp.groupby('movieId')['tag'].apply(list).to_dict()

		for _, row in self.movies_df.iterrows():
			mid = int(row['movieId'])
			genre_tokens = self._tokenize_genres(row.get('genres', ''))
			token_counts = {}
			for tok in genre_tokens:
				token_counts[tok] = token_counts.get(tok, 0) + 1

			if tags_by_movie is not None and mid in tags_by_movie:
				for raw_tag in tags_by_movie[mid]:
					if not raw_tag:
						continue
					token_counts[raw_tag] = token_counts.get(raw_tag, 0) + 1

			movie_tokens_list.append(token_counts)
			# df 카운트 업데이트 (존재 여부만 반영)
			for tok in token_counts.keys():
				df_counter[tok] = df_counter.get(tok, 0) + 1

		# 2) 어휘집 구축 (min_df 이상만 남김)
		num_movies = len(movie_ids)
		valid_tokens = [tok for tok, df in df_counter.items() if df >= min_df]
		valid_tokens.sort()
		self.token_to_index = {tok: idx for idx, tok in enumerate(valid_tokens)}
		self.index_to_token = {idx: tok for tok, idx in self.token_to_index.items()}

		# 3) IDF 계산
		idf = np.zeros(len(self.token_to_index), dtype=np.float32)
		for tok, idx in self.token_to_index.items():
			df = df_counter.get(tok, 0)
			idf[idx] = np.log((1.0 + num_movies) / (1.0 + df)) + 1.0
		self.idf_vector = idf

		# 4) CSR 구성 위한 배열
		rows = []
		cols = []
		data = []

		for row_idx, token_counts in enumerate(movie_tokens_list):
			for tok, tf in token_counts.items():
				col_idx = self.token_to_index.get(tok)
				if col_idx is None:
					continue
				val_tf = (1.0 + np.log(tf)) if use_log_tf else float(tf)
				rows.append(row_idx)
				cols.append(col_idx)
				data.append(val_tf)

		matrix = csr_matrix((np.array(data, dtype=np.float32), (np.array(rows), np.array(cols))),
			shape=(num_movies, len(self.token_to_index)), dtype=np.float32)

		# TF-IDF 가중치 적용
		matrix = matrix.multiply(self.idf_vector)

		# 행 L2 정규화 (코사인 유사도 계산 편의)
		row_norms = np.asarray(np.sqrt(matrix.multiply(matrix).sum(axis=1))).ravel()
		row_norms[row_norms == 0.0] = 1.0
		inv = 1.0 / row_norms
		matrix = matrix.multiply(inv.reshape(-1, 1))

		self.item_feature_matrix = matrix
		print(f"특성 행렬 크기: {self.item_feature_matrix.shape} (영화 x 토큰)")

	def _build_user_profile_vector(self, user_id):
		"""사용자 프로필 벡터 생성 (평점 가중 합)"""
		if user_id not in set(self.ratings_df['userId'].unique().tolist()):
			return None

		user_ratings = self.ratings_df[self.ratings_df['userId'] == user_id][['movieId', 'rating']]
		user_ratings['movieId'] = user_ratings['movieId'].astype(int)

		# 사용자 평균 중심화 가중치
		user_mean = user_ratings['rating'].mean()
		user_ratings['weight'] = user_ratings['rating'] - user_mean

		# 영화 인덱스 정렬 및 가중치 벡터 생성
		indices = []
		weights = []
		for _, r in user_ratings.iterrows():
			mid = int(r['movieId'])
			idx = self.movie_id_to_index.get(mid)
			if idx is None:
				continue
			w = float(r['weight'])
			if w == 0.0:
				continue
			indices.append(idx)
			weights.append(w)

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

	def recommend_movies(self, user_id, n_recommendations=10, min_score=0.0):
		"""
		특정 사용자에게 영화 추천 (콘텐츠 기반)

		Args:
			user_id: 사용자 ID
			n_recommendations: 추천할 영화 수
			min_score: 최소 유사도 임계값
		"""
		print(f"사용자 {user_id}에게 영화를 추천하는 중...")

		profile = self._build_user_profile_vector(user_id)
		if profile is None:
			return []

		# 모든 영화에 대한 코사인 유사도 점수 (행이 L2정규화되어 있으므로 내적 == 코사인)
		scores = self.item_feature_matrix @ profile.reshape(-1, 1)
		scores = np.asarray(scores).ravel()

		# 이미 평가한 영화는 제외
		user_rated_movie_ids = set(self.ratings_df[self.ratings_df['userId'] == user_id]['movieId'].astype(int).tolist())

		candidates = []
		for row_idx, score in enumerate(scores):
			mid = self.movie_index_to_id[row_idx]
			if mid in user_rated_movie_ids:
				continue
			if score >= min_score:
				candidates.append((mid, float(score)))

		candidates.sort(key=lambda x: x[1], reverse=True)
		selected = candidates[:n_recommendations]

		result = []
		for mid, sc in selected:
			movie_info = self.movies_df[self.movies_df['movieId'] == mid]
			if movie_info.empty:
				continue
			title = movie_info.iloc[0]['title']
			genres = movie_info.iloc[0].get('genres', '')
			result.append({
				'movieId': mid,
				'title': title,
				'genres': genres,
				'relevance': round(sc, 4)
			})

		return result

	def evaluate_recommendations(self, user_id, n_recommendations=10):
		"""추천 결과 요약 출력"""
		recommendations = self.recommend_movies(user_id, n_recommendations=n_recommendations)
		print(f"\n=== 사용자 {user_id} 콘텐츠 기반 추천 결과 ===")
		print(f"추천 영화 수: {len(recommendations)}")
		if recommendations:
			print("\n추천 영화 목록:")
			for i, rec in enumerate(recommendations, 1):
				print(f"{i:2d}. {rec['title']}")
				print(f"    유사도: {rec['relevance']}")
				print(f"    장르: {rec['genres']}")
				print()
		else:
			print("추천할 영화가 없습니다.")
		return recommendations


def main():
	"""메인 실행 함수"""
	# 데이터 파일 경로
	ratings_file = "./ml-latest-small/ratings.csv"
	movies_file = "./ml-latest-small/movies.csv"
	tags_file = "./ml-latest-small/tags.csv"

	# 콘텐츠 기반 필터링 객체 생성
	cbf = ContentBasedFiltering(ratings_file, movies_file, tags_file)

	# 데이터 로드
	cbf.load_data()

	# 콘텐츠 특성 행렬 생성
	cbf.create_item_feature_matrix(min_df=2, use_log_tf=True)

	# 테스트 사용자들
	test_users = [1,2,3,4,5]

	print("\n" + "="*60)
	print("콘텐츠 기반 필터링 추천 결과")
	print("="*60)

	for user_id in test_users:
		try:
			cbf.evaluate_recommendations(user_id, n_recommendations=5)
			print("-" * 60)
		except Exception as e:
			print(f"사용자 {user_id} 추천 중 오류 발생: {e}")
			print("-" * 60)


if __name__ == "__main__":
	main()


