import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.metrics import mean_squared_error
import warnings
warnings.filterwarnings('ignore')

class SVDRecommender:
    def __init__(self, ratings_file, movies_file, n_components=50):
        """
        SVD 기반 추천 시스템
        
        Args:
            ratings_file: 평점 데이터 파일 경로
            movies_file: 영화 정보 파일 경로
            n_components: 잠재 요인 수 (차원)
        """
        self.ratings_file = ratings_file
        self.movies_file = movies_file
        self.n_components = n_components
        
        self.ratings_df = None
        self.movies_df = None
        self.user_movie_matrix = None
        self.user_movie_matrix_filled = None
        self.model = None
        self.user_factors = None
        self.item_factors = None
        
    def load_data(self):
        """데이터 로드"""
        print("데이터를 로드하는 중...")
        self.ratings_df = pd.read_csv(self.ratings_file)
        self.movies_df = pd.read_csv(self.movies_file)
        
        print(f"평점 데이터: {self.ratings_df.shape[0]}개 평점")
        print(f"영화 데이터: {self.movies_df.shape[0]}개 영화")
        print(f"사용자 수: {self.ratings_df['userId'].nunique()}명")
        
    def create_user_movie_matrix(self):
        """사용자-영화 평점 행렬 생성"""
        print("사용자-영화 평점 행렬을 생성하는 중...")
        self.user_movie_matrix = self.ratings_df.pivot_table(
            index='userId', 
            columns='movieId', 
            values='rating'
        )
        print(f"평점 행렬 크기: {self.user_movie_matrix.shape}")
        print(f"평점 행렬 희소성: {(1 - self.user_movie_matrix.count().sum() / (self.user_movie_matrix.shape[0] * self.user_movie_matrix.shape[1])) * 100:.2f}%")
        
    def fill_missing_values(self, method='svd', max_iter=10):
        """결측값 채우기"""
        if method == 'svd':
            print("SVD를 이용한 반복적 결측값 채우기...")
            self._iterative_svd_imputation(max_iter)
        else:
            print("전체 평균으로 결측값 채우기...")
            global_mean = self.user_movie_matrix.mean().mean()
            self.user_movie_matrix_filled = self.user_movie_matrix.fillna(global_mean)
            
            if self.user_movie_matrix_filled.isna().any().any():
                self.user_movie_matrix_filled = self.user_movie_matrix_filled.fillna(0)
            
            print(f"전체 평균 평점: {global_mean:.2f}")
        
        print("결측값 채우기 완료!")
    
    def _iterative_svd_imputation(self, max_iter=10):
        """SVD를 이용한 반복적 결측값 채우기"""
        # 초기값: 전체 평균으로 채우기
        global_mean = self.user_movie_matrix.mean().mean()
        matrix_filled = self.user_movie_matrix.fillna(global_mean)
        
        # 결측값 위치 기록
        missing_mask = self.user_movie_matrix.isna()
        
        print(f"초기 전체 평균: {global_mean:.2f}")
        
        for iteration in range(max_iter):
            # SVD 분해
            svd = TruncatedSVD(n_components=self.n_components, random_state=42)
            user_factors = svd.fit_transform(matrix_filled)
            item_factors = svd.components_
            
            # 예상 평점 계산
            predicted_matrix = np.dot(user_factors, item_factors)
            
            # 결측값만 업데이트
            matrix_filled = matrix_filled.copy()
            # numpy 배열로 변환하여 인덱싱
            matrix_filled_np = matrix_filled.values
            predicted_matrix_np = predicted_matrix
            matrix_filled_np[missing_mask.values] = predicted_matrix_np[missing_mask.values]
            matrix_filled = pd.DataFrame(matrix_filled_np, 
                                       index=matrix_filled.index, 
                                       columns=matrix_filled.columns)
            
            # 수렴 확인 (변화량 계산)
            if iteration > 0:
                change = np.abs(matrix_filled_np[missing_mask.values] - prev_matrix_np[missing_mask.values]).mean()
                print(f"반복 {iteration + 1}: 평균 변화량 = {change:.6f}")
                
                if change < 0.001:  # 수렴 조건
                    print(f"수렴 완료 (반복 {iteration + 1})")
                    break
            else:
                print(f"반복 {iteration + 1}: 초기 SVD 완료")
            
            prev_matrix = matrix_filled.copy()
            prev_matrix_np = matrix_filled_np.copy()
        
        self.user_movie_matrix_filled = matrix_filled
        print(f"최종 반복 완료 (총 {min(iteration + 1, max_iter)}회)")
        
    def fit_model(self):
        """SVD 모델 학습"""
        print(f"SVD 모델을 학습하는 중... (차원: {self.n_components})")
        
        self.model = TruncatedSVD(n_components=self.n_components, random_state=42)
        self.user_factors = self.model.fit_transform(self.user_movie_matrix_filled)
        self.item_factors = self.model.components_
        
        print(f"사용자 요인 행렬 크기: {self.user_factors.shape}")
        print(f"영화 요인 행렬 크기: {self.item_factors.shape}")
        print("SVD 모델 학습 완료!")
        
    def predict_rating(self, user_id, movie_id):
        """
        특정 사용자가 특정 영화에 줄 평점 예측
        
        Args:
            user_id: 사용자 ID
            movie_id: 영화 ID
        """
        # 사용자와 영화 인덱스 찾기
        user_ids = self.user_movie_matrix.index.tolist()
        movie_ids = self.user_movie_matrix.columns.tolist()
        
        if user_id not in user_ids or movie_id not in movie_ids:
            return None, "사용자 또는 영화를 찾을 수 없음"
        
        user_idx = user_ids.index(user_id)
        movie_idx = movie_ids.index(movie_id)
        
        # 이미 평가한 영화인지 확인
        existing_rating = self.user_movie_matrix.loc[user_id, movie_id]
        if not pd.isna(existing_rating):
            return existing_rating, "이미 평가한 영화"
        
        # 행렬 분해를 통한 예측
        predicted_rating = np.dot(self.user_factors[user_idx], self.item_factors[:, movie_idx])
        
        # 평점 범위 제한 (0.5 ~ 5.0)
        predicted_rating = np.clip(predicted_rating, 0.5, 5.0)
        
        return predicted_rating, "SVD 기반"
        
    def get_user_preferences(self, user_id):
        """사용자의 선호도 분석 (최적화된 버전)"""
        user_ratings = self.ratings_df[self.ratings_df['userId'] == user_id]
        
        if len(user_ratings) == 0:
            return {
                'genre_scores': {},
                'user_mean': 3.0,
                'user_std': 1.0,
                'total_ratings': 0
            }
        
        # 사용자 평점 패턴 분석 (먼저 계산)
        user_mean = user_ratings['rating'].mean()
        user_std = user_ratings['rating'].std()
        
        # 영화 정보와 조인 (한 번만)
        user_movies = user_ratings.merge(self.movies_df[['movieId', 'genres']], on='movieId', how='left')
        
        # 장르별 선호도 계산 (벡터화)
        genre_preferences = {}
        
        for _, row in user_movies.iterrows():
            if pd.isna(row['genres']):
                continue
            genres = row['genres'].split('|')
            rating = row['rating']
            
            for genre in genres:
                if genre not in genre_preferences:
                    genre_preferences[genre] = []
                genre_preferences[genre].append(rating)
        
        # 장르별 평균 평점 계산 (간소화)
        genre_scores = {}
        for genre, ratings in genre_preferences.items():
            if len(ratings) >= 2:  # 최소 2개 이상 평가한 장르만
                avg_rating = np.mean(ratings)
                # 가중치 계산 간소화
                genre_scores[genre] = avg_rating
        
        return {
            'genre_scores': genre_scores,
            'user_mean': user_mean,
            'user_std': user_std,
            'total_ratings': len(user_ratings)
        }
    
    def calculate_personalized_score(self, user_id, movie_id, predicted_rating, user_prefs=None, movie_rating_counts=None):
        """개인화된 점수 계산 (최적화된 버전)"""
        if user_prefs is None:
            user_prefs = self.get_user_preferences(user_id)
        
        # 장르 선호도만 간단히 적용 (가장 효과적인 부분만)
        genre_bonus = 0.0
        
        # 영화 정보 캐시에서 가져오기
        if hasattr(self, '_movie_genres_cache'):
            movie_genres = self._movie_genres_cache.get(movie_id, [])
        else:
            movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
            if movie_info.empty:
                return predicted_rating
            movie_genres = movie_info.iloc[0]['genres'].split('|')
        
        # 장르 선호도 보너스 (간소화)
        for genre in movie_genres:
            if genre in user_prefs['genre_scores']:
                genre_score = user_prefs['genre_scores'][genre]
                if genre_score > user_prefs['user_mean']:
                    genre_bonus += (genre_score - user_prefs['user_mean']) * 0.5
                else:
                    genre_bonus += (genre_score - user_prefs['user_mean']) * 0.2
        
        # 인기도 패널티 (캐시 활용)
        popularity_penalty = 0.0
        if movie_rating_counts is not None:
            movie_rating_count = movie_rating_counts.get(movie_id, 0)
        else:
            movie_rating_count = len(self.ratings_df[self.ratings_df['movieId'] == movie_id])
        
        if movie_rating_count > 300:  # 임계값 단순화
            popularity_penalty = -0.3
        elif movie_rating_count > 150:
            popularity_penalty = -0.1
        
        # 최종 개인화 점수 계산 (사용자 패턴 조정 제거로 속도 향상)
        personalized_score = predicted_rating + genre_bonus + popularity_penalty
        
        return np.clip(personalized_score, 0.0, 5.0)
    
    def recommend_movies(self, user_id, n_recommendations=10, diversity_factor=0.3):
        """
        개인화가 강화된 영화 추천 (최적화된 버전)
        
        Args:
            user_id: 사용자 ID
            n_recommendations: 추천할 영화 수
            diversity_factor: 다양성 인자 (0.0-1.0, 높을수록 다양한 장르 추천)
        """
        print(f"사용자 {user_id}에게 개인화된 영화를 추천하는 중...")
        
        # 사용자가 이미 평가한 영화들
        user_ratings = self.user_movie_matrix.loc[user_id].dropna()
        rated_movies = set(user_ratings.index)
        
        # 사용자 선호도 분석 (한 번만)
        user_prefs = self.get_user_preferences(user_id)
        
        # 영화 장르 캐시 생성 (반복 조회 방지)
        if not hasattr(self, '_movie_genres_cache'):
            self._movie_genres_cache = {}
            for _, row in self.movies_df.iterrows():
                self._movie_genres_cache[row['movieId']] = row['genres'].split('|')
        
        # 추천 후보 영화 필터링 (간소화)
        movie_rating_counts = self.ratings_df.groupby('movieId').size()
        movie_rating_counts_dict = movie_rating_counts.to_dict()
        
        # 더 간단한 필터링 (속도 향상)
        min_ratings = 5
        max_ratings = 1000
        
        candidate_movies = [
            movie_id for movie_id, count in movie_rating_counts_dict.items()
            if min_ratings <= count <= max_ratings and movie_id not in rated_movies
        ]
        
        # 후보가 너무 많으면 랜덤 샘플링 (속도 향상)
        if len(candidate_movies) > 2000:
            np.random.shuffle(candidate_movies)
            candidate_movies = candidate_movies[:2000]
        
        # 각 영화에 대한 개인화된 점수 계산 (배치 처리)
        movie_predictions = []
        
        for movie_id in candidate_movies:
            predicted_rating, status = self.predict_rating(user_id, movie_id)
            if predicted_rating is not None:
                # 캐시된 데이터로 개인화 점수 계산
                personalized_score = self.calculate_personalized_score(
                    user_id, movie_id, predicted_rating, user_prefs, movie_rating_counts_dict
                )
                movie_predictions.append((movie_id, personalized_score, predicted_rating, status))
        
        # 개인화된 점수 기준으로 정렬
        movie_predictions.sort(key=lambda x: x[1], reverse=True)
        
        # 다양성 적용 (단순화)
        if diversity_factor > 0.5:  # 높은 다양성만 적용 (속도 향상)
            movie_predictions = self._apply_simple_diversity_filter(
                movie_predictions, n_recommendations
            )
        
        # 상위 추천 영화들 반환
        recommendations = movie_predictions[:n_recommendations]
        
        # 영화 정보와 함께 반환 (조인 최소화)
        result = []
        movie_info_dict = self.movies_df.set_index('movieId')[['title', 'genres']].to_dict('index')
        
        for movie_id, personalized_score, original_score, status in recommendations:
            if movie_id in movie_info_dict:
                movie_info = movie_info_dict[movie_id]
                result.append({
                    'movieId': movie_id,
                    'title': movie_info['title'],
                    'genres': movie_info['genres'],
                    'predicted_rating': round(original_score, 2),
                    'personalized_score': round(personalized_score, 2),
                    'status': status
                })
        
        return result
    
    def _apply_simple_diversity_filter(self, movie_predictions, n_recommendations):
        """간단한 다양성 필터 (속도 최적화)"""
        selected_movies = []
        used_genres = set()
        
        for movie_id, score, original_score, status in movie_predictions:
            if len(selected_movies) >= n_recommendations:
                break
            
            # 캐시에서 장르 정보 가져오기
            if hasattr(self, '_movie_genres_cache'):
                movie_genres = set(self._movie_genres_cache.get(movie_id, []))
            else:
                continue
            
            # 장르 중복이 적으면 우선 선택
            genre_overlap = len(movie_genres.intersection(used_genres))
            
            if genre_overlap <= 1:  # 중복이 1개 이하면 선택
                selected_movies.append((movie_id, score, original_score, status))
                used_genres.update(movie_genres)
        
        # 부족한 경우 나머지로 채우기
        if len(selected_movies) < n_recommendations:
            remaining = [
                item for item in movie_predictions 
                if item[0] not in [m[0] for m in selected_movies]
            ]
            selected_movies.extend(remaining[:n_recommendations - len(selected_movies)])
        
        return selected_movies
    
    def _apply_diversity_filter(self, movie_predictions, diversity_factor, n_recommendations):
        """다양성을 위한 장르 분산 필터링 (개선된 버전)"""
        if diversity_factor == 0:
            return movie_predictions  # 다양성 고려 안함
        
        # 모든 영화에 대해 다양성 점수를 계산하여 재정렬
        movies_with_diversity = []
        
        for movie_id, score, original_score, status in movie_predictions:
            movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
            if not movie_info.empty:
                movie_genres = set(movie_info.iloc[0]['genres'].split('|'))
                
                # 기본 다양성 점수 (장르 희귀도 기반)
                genre_rarity_score = 0
                for genre in movie_genres:
                    # 해당 장르를 가진 영화 수가 적을수록 높은 점수
                    genre_movie_count = len(self.movies_df[self.movies_df['genres'].str.contains(genre, na=False)])
                    total_movies = len(self.movies_df)
                    genre_rarity = 1.0 - (genre_movie_count / total_movies)
                    genre_rarity_score += genre_rarity
                
                # 장르 수가 많을수록 다양성 보너스
                genre_count_bonus = len(movie_genres) * 0.1
                
                # 최종 다양성 점수
                diversity_score = (genre_rarity_score + genre_count_bonus) / len(movie_genres)
                
                # 개인화 점수와 다양성 점수를 조합
                final_score = score * (1 - diversity_factor) + diversity_score * diversity_factor * 3
                
                movies_with_diversity.append((movie_id, final_score, original_score, status))
        
        # 최종 점수로 재정렬
        movies_with_diversity.sort(key=lambda x: x[1], reverse=True)
        
        # 추가적인 장르 중복 방지 (Greedy 방식)
        if diversity_factor > 0.5:  # 다양성이 중요한 경우만
            final_selection = []
            used_genres = set()
            remaining_candidates = movies_with_diversity.copy()
            
            while len(final_selection) < n_recommendations and remaining_candidates:
                best_movie = None
                best_score = -1
                best_idx = -1
                
                for idx, (movie_id, final_score, original_score, status) in enumerate(remaining_candidates):
                    movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
                    if not movie_info.empty:
                        movie_genres = set(movie_info.iloc[0]['genres'].split('|'))
                        
                        # 장르 중복 패널티
                        overlap_penalty = len(movie_genres.intersection(used_genres)) * 0.5
                        adjusted_score = final_score - overlap_penalty
                        
                        if adjusted_score > best_score:
                            best_score = adjusted_score
                            best_movie = (movie_id, final_score, original_score, status)
                            best_idx = idx
                
                if best_movie:
                    final_selection.append(best_movie)
                    movie_info = self.movies_df[self.movies_df['movieId'] == best_movie[0]]
                    if not movie_info.empty:
                        movie_genres = set(movie_info.iloc[0]['genres'].split('|'))
                        used_genres.update(movie_genres)
                    remaining_candidates.pop(best_idx)
                else:
                    break
            
            # 부족한 경우 나머지로 채움
            final_selection.extend(remaining_candidates[:n_recommendations - len(final_selection)])
            return final_selection
        
        return movies_with_diversity
        
    def evaluate_recommendations(self, user_id, n_recommendations=10):
        """추천 결과 평가 및 분석"""
        recommendations = self.recommend_movies(user_id, n_recommendations)
        
        print(f"\n=== 사용자 {user_id} 추천 결과 (SVD) ===")
        print(f"추천 영화 수: {len(recommendations)}")
        
        if recommendations:
            print("\n추천 영화 목록:")
            for i, rec in enumerate(recommendations, 1):
                print(f"{i:2d}. {rec['title']}")
                print(f"    예상 평점: {rec['predicted_rating']}")
                print(f"    장르: {rec['genres']}")
                print()
        else:
            print("추천할 영화가 없습니다.")
            
        return recommendations
        
    def evaluate_model(self, test_ratio=0.2):
        """
        모델 성능 평가 (교차 검증)
        
        Args:
            test_ratio: 테스트 데이터 비율
        """
        print("모델 성능을 평가하는 중...")
        
        # 테스트 데이터 생성 (랜덤 샘플링)
        test_indices = np.random.choice(
            self.ratings_df.index, 
            size=int(len(self.ratings_df) * test_ratio), 
            replace=False
        )
        
        train_df = self.ratings_df.drop(test_indices)
        test_df = self.ratings_df.loc[test_indices]
        
        # 훈련 데이터로 모델 재학습
        train_matrix = train_df.pivot_table(
            index='userId', 
            columns='movieId', 
            values='rating'
        )
        
        # 결측값 채우기 (더 안전한 방법)
        user_means = train_matrix.mean(axis=1)
        train_matrix_filled = train_matrix.fillna(user_means)
        
        # 여전히 NaN이 있다면 전체 평균으로 채우기
        if train_matrix_filled.isna().any().any():
            global_mean = train_matrix.mean().mean()
            train_matrix_filled = train_matrix_filled.fillna(global_mean)
        
        # 최종적으로 NaN이 있다면 0으로 채우기
        if train_matrix_filled.isna().any().any():
            train_matrix_filled = train_matrix_filled.fillna(0)
        
        # SVD 모델 재학습
        model = TruncatedSVD(n_components=self.n_components, random_state=42)
        
        user_factors = model.fit_transform(train_matrix_filled)
        item_factors = model.components_
        
        # 테스트 데이터에 대한 예측
        predictions = []
        actuals = []
        
        for _, row in test_df.iterrows():
            user_id = row['userId']
            movie_id = row['movieId']
            actual_rating = row['rating']
            
            if user_id in train_matrix.index and movie_id in train_matrix.columns:
                user_idx = train_matrix.index.get_loc(user_id)
                movie_idx = train_matrix.columns.get_loc(movie_id)
                
                predicted_rating = np.dot(user_factors[user_idx], item_factors[:, movie_idx])
                predicted_rating = np.clip(predicted_rating, 0.5, 5.0)
                
                predictions.append(predicted_rating)
                actuals.append(actual_rating)
        
        # RMSE 계산
        if predictions:
            rmse = np.sqrt(mean_squared_error(actuals, predictions))
            print(f"RMSE: {rmse:.4f}")
            return rmse
        else:
            print("평가할 데이터가 없습니다.")
            return None

def get_user_recommendations(user_id, n_recommendations=10, random_seed=42, diversity_factor=0.3, include_personalized_score=False, verbose=False):
    """
    개인화가 강화된 SVDRecommender를 사용해서 유저 ID로 추천 영화 ID, 제목, 평점을 가져오는 함수
    
    Args:
        user_id: 사용자 ID
        n_recommendations: 추천할 영화 수
        random_seed: 랜덤 시드 (재현 가능한 결과를 위해)
        diversity_factor: 다양성 인자 (0.0-1.0, 높을수록 다양한 장르 추천)
        include_personalized_score: True면 개인화 점수도 함께 반환
        verbose: True면 상세한 시간 측정 출력
        
    Returns:
        list: include_personalized_score가 False면 [(movie_id, title, predicted_rating, avg_rating), ...]
              include_personalized_score가 True면 [(movie_id, title, predicted_rating, personalized_score, avg_rating), ...]
    """
    import time
    
    if verbose:
        step_times = {}
        
    # 랜덤 시드 설정
    np.random.seed(random_seed)
    
    # 데이터 파일 경로
    ratings_file = "./ml-latest-small/ratings.csv"
    movies_file = "./ml-latest-small/movies.csv"
    
    # SVDRecommender 모델 생성
    if verbose:
        start = time.time()
    svd_model = SVDRecommender(ratings_file, movies_file, n_components=50)
    if verbose:
        step_times['모델 생성'] = time.time() - start
    
    # 데이터 로드
    if verbose:
        start = time.time()
    svd_model.load_data()
    if verbose:
        step_times['데이터 로드'] = time.time() - start
    
    # 사용자-영화 행렬 생성
    if verbose:
        start = time.time()
    svd_model.create_user_movie_matrix()
    if verbose:
        step_times['행렬 생성'] = time.time() - start
    
    # 결측값 채우기
    if verbose:
        start = time.time()
    svd_model.fill_missing_values(method='svd', max_iter=5)
    if verbose:
        step_times['결측값 처리'] = time.time() - start
    
    # SVD 모델 학습
    if verbose:
        start = time.time()
    svd_model.fit_model()
    if verbose:
        step_times['SVD 학습'] = time.time() - start
    
    # 추천 계산
    if verbose:
        start = time.time()
    recommendations = svd_model.recommend_movies(user_id, n_recommendations, diversity_factor)
    if verbose:
        step_times['추천 계산'] = time.time() - start
    
    # 평균 평점 계산
    if verbose:
        start = time.time()
    movie_avg_ratings = svd_model.ratings_df.groupby('movieId')['rating'].mean()
    if verbose:
        step_times['평균 평점 계산'] = time.time() - start
    
    # 결과 구성
    if verbose:
        start = time.time()
    result = []
    for rec in recommendations:
        movie_id = rec['movieId']
        title = rec['title']
        predicted_rating = rec['predicted_rating']
        
        # 해당 영화의 평균 평점 가져오기
        avg_rating = movie_avg_ratings.get(movie_id, 0.0)
        
        if include_personalized_score:
            personalized_score = rec['personalized_score']
            result.append((movie_id, title, predicted_rating, personalized_score, avg_rating))
        else:
            result.append((movie_id, title, predicted_rating, avg_rating))
    
    if verbose:
        step_times['결과 구성'] = time.time() - start
        
        # 상세 시간 출력
        print(f"\n🔍 상세 실행 시간:")
        total_detailed = 0
        for step, elapsed in step_times.items():
            print(f"  {step}: {elapsed:.3f}초")
            total_detailed += elapsed
        print(f"  합계: {total_detailed:.3f}초")
    
    return result