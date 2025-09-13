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
        
    def fill_missing_values(self):
        """결측값을 사용자별 평균으로 채우기"""
        print("결측값을 사용자별 평균으로 채우는 중...")
        
        # 사용자별 평균 평점으로 채우기
        user_means = self.user_movie_matrix.mean(axis=1)
        self.user_movie_matrix_filled = self.user_movie_matrix.fillna(user_means)
        
        # 여전히 NaN이 있다면 전체 평균으로 채우기
        if self.user_movie_matrix_filled.isna().any().any():
            global_mean = self.user_movie_matrix.mean().mean()
            self.user_movie_matrix_filled = self.user_movie_matrix_filled.fillna(global_mean)
        
        # 최종적으로 NaN이 있다면 0으로 채우기
        if self.user_movie_matrix_filled.isna().any().any():
            self.user_movie_matrix_filled = self.user_movie_matrix_filled.fillna(0)
            
        print("결측값 채우기 완료!")
        
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
        
    def recommend_movies(self, user_id, n_recommendations=10):
        """
        특정 사용자에게 영화 추천
        
        Args:
            user_id: 사용자 ID
            n_recommendations: 추천할 영화 수
        """
        print(f"사용자 {user_id}에게 영화를 추천하는 중...")
        
        # 사용자가 이미 평가한 영화들
        user_ratings = self.user_movie_matrix.loc[user_id].dropna()
        rated_movies = set(user_ratings.index)
        
        # 모든 영화 중에서 아직 평가하지 않은 영화들
        all_movies = set(self.user_movie_matrix.columns)
        unrated_movies = all_movies - rated_movies
        
        # 각 영화에 대한 예상 평점 계산
        movie_predictions = []
        
        for movie_id in unrated_movies:
            predicted_rating, status = self.predict_rating(user_id, movie_id)
            if predicted_rating is not None:
                movie_predictions.append((movie_id, predicted_rating, status))
        
        # 예상 평점이 높은 순으로 정렬
        movie_predictions.sort(key=lambda x: x[1], reverse=True)
        
        # 상위 추천 영화들 반환
        recommendations = movie_predictions[:n_recommendations]
        
        # 영화 정보와 함께 반환
        result = []
        for movie_id, predicted_rating, status in recommendations:
            movie_info = self.movies_df[self.movies_df['movieId'] == movie_id]
            if not movie_info.empty:
                title = movie_info.iloc[0]['title']
                genres = movie_info.iloc[0]['genres']
                result.append({
                    'movieId': movie_id,
                    'title': title,
                    'genres': genres,
                    'predicted_rating': round(predicted_rating, 2),
                    'status': status
                })
        
        return result
        
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

def main():
    """메인 실행 함수"""
    print("="*60)
    print("SVD 기반 추천 시스템")
    print("="*60)
    
    # 데이터 파일 경로
    ratings_file = "/Users/ptj/Documents/Capstone/dataset/ml-latest-small/ratings.csv"
    movies_file = "/Users/ptj/Documents/Capstone/dataset/ml-latest-small/movies.csv"
    
    # SVD 모델 생성 및 학습
    svd_model = SVDRecommender(ratings_file, movies_file, n_components=50)
    
    svd_model.load_data()
    svd_model.create_user_movie_matrix()
    svd_model.fill_missing_values()
    svd_model.fit_model()
    
    # 성능 평가
    rmse = svd_model.evaluate_model()
    
    # 추천 결과
    test_users = [1, 2, 3, 4, 5]
    for user_id in test_users:
        try:
            svd_model.evaluate_recommendations(user_id, n_recommendations=5)
            print("-" * 50)
        except Exception as e:
            print(f"사용자 {user_id} 추천 중 오류 발생: {e}")
    
    if rmse:
        print(f"\nSVD RMSE: {rmse:.4f}")

if __name__ == "__main__":
    main()
