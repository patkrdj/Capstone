import pandas as pd
import numpy as np
from typing import Dict, List, Optional
import re
from datetime import datetime
import random
import pymysql
from contextlib import contextmanager

@contextmanager
def get_mysql_connection():
    """MySQL 데이터베이스 연결"""
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

class BlurayRatingConverter:
    """
    블루레이 평점 ↔ 영화 평점 양방향 변환기
    
    주요 기능:
    1. 영화 평점 → 블루레이 평점 변환 (기존)
    2. 블루레이 평점 → 영화 평점 변환 (신규)
    
    블루레이 → 영화 역변환 수식: x = (y - α - Σ(γi * feature_i)) / β
    """
    
    def __init__(self):
        # 기본 가중치 설정 (조정 가능)
        self.weights = {
            'base_rating': 0.6,      # β: 원본 영화 평가의 가중치
            'director_factor': 0.15, # 감독 요인
            'year_factor': 0.003,    # 연도별 가중치 (최신작 선호)
            'running_time_factor': 0.001, # 러닝타임 요인
            'quality_4k': 0.4,       # 4K 화질 가중치
            'quality_hd': 0.2,       # HD 화질 가중치
            'quality_sd': 0.0,       # SD 화질 가중치
            'price_factor': -0.00008, # 가격 요인 (높은 가격은 평가 하락)
            'limited_edition': 0.25, # 리미티드 에디션 가중치
            'region_code_factor': 0.05, # 지역 코드 요인
            'site_preference': {     # 사이트별 신뢰도
                'yes24': 0.05,
                'aladin': 0.03,
                'kyobo': 0.04
            }
        }
        
        # 상수 α
        self.intercept = 0.3
        
        # 유명 감독 리스트 (실제 DB에서 가져올 수도 있음)
        self.famous_directors = [
            'Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese',
            'Quentin Tarantino', 'David Fincher', 'Ridley Scott',
            'James Cameron', 'Denis Villeneuve', '봉준호', '박찬욱',
            'Akira Kurosawa', 'Alfred Hitchcock', 'Stanley Kubrick'
        ]
        
        # 장르별 블루레이 선호도
        self.genre_preferences = {
            'Action': 0.15,
            'Adventure': 0.10,
            'Animation': 0.12,
            'Children': 0.08,
            'Comedy': 0.05,
            'Crime': 0.08,
            'Documentary': 0.03,
            'Drama': 0.06,
            'Fantasy': 0.14,
            'Film-Noir': 0.07,
            'Horror': 0.18,
            'Musical': 0.06,
            'Mystery': 0.09,
            'Romance': 0.04,
            'Sci-Fi': 0.20,
            'Thriller': 0.12,
            'War': 0.10,
            'Western': 0.08
        }
        
        # 데이터 캐시
        self._ratings_cache = None
        self._ratings_by_movie = None
        self._movies_cache = None
        
    def update_weights(self, new_weights: Dict[str, float]):
        """가중치 업데이트"""
        self.weights.update(new_weights)
    
    def get_movie_data(self, movie_id: int) -> Optional[Dict]:
        """데이터베이스에서 영화 정보 가져오기"""
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT id, title, director, release_date, production_company, 
                       distribution_company, running_time
                FROM movies 
                WHERE id = %s
                """
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute(query, (movie_id,))
                result = cursor.fetchone()
                cursor.close()
                return result
        except Exception as e:
            print(f"영화 데이터 조회 오류: {e}")
            return None
    
    def get_sales_data(self, sales_id: int) -> Optional[Dict]:
        """데이터베이스에서 블루레이 판매 정보 가져오기"""
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT s.id, s.movie_id, s.site_name, s.site_url, s.price, 
                       s.quality, s.region_code, s.is_limited_edition, 
                       s.image_link, s.bluray_title,
                       m.title, m.director, m.release_date, m.production_company,
                       m.distribution_company, m.running_time
                FROM sales s
                LEFT JOIN movies m ON s.movie_id = m.id
                WHERE s.id = %s
                """
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute(query, (sales_id,))
                result = cursor.fetchone()
                cursor.close()
                return result
        except Exception as e:
            print(f"판매 데이터 조회 오류: {e}")
            return None
    
    def _load_ratings_cache(self):
        """ratings.csv 데이터를 캐시에 로드"""
        if self._ratings_by_movie is not None:
            return  # 이미 로드됨
        
        try:
            import pandas as pd
            import os
            
            # ratings.csv 파일 경로
            ratings_file = "ml-latest-small/ratings.csv"
            if not os.path.exists(ratings_file):
                print(f"ratings.csv 파일을 찾을 수 없습니다: {ratings_file}")
                self._ratings_by_movie = {}
                return
            
            # CSV 전체 로드 및 영화별 평가 그룹화
            print("ratings.csv 데이터를 로딩 중...")
            ratings_df = pd.read_csv(ratings_file)
            self._ratings_by_movie = ratings_df.groupby('movieId')['rating'].apply(list).to_dict()
            print(f"총 {len(self._ratings_by_movie)}개 영화의 평가 데이터를 로드했습니다.")
                
        except Exception as e:
            print(f"ratings.csv 로딩 오류: {e}")
            self._ratings_by_movie = {}
    
    def get_movie_ratings_from_csv(self, movie_id: int) -> List[float]:
        """ratings.csv에서 영화 평가 가져오기 (캐시 활용)"""
        # 캐시가 로드되지 않았으면 로드
        self._load_ratings_cache()
        
        # 캐시에서 해당 영화의 평가 반환
        return self._ratings_by_movie.get(movie_id, [4.0])
    
    def get_review_data(self, user_id: int, sales_id: int) -> Optional[Dict]:
        """데이터베이스에서 리뷰 데이터 가져오기 (복합키 사용)"""
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT r.user_id, r.sales_id, r.rating as review_rating, r.review_comment, r.created_at,
                       s.movie_id, s.site_name, s.price, s.quality, s.is_limited_edition,
                       s.region_code, s.bluray_title,
                       m.title, m.director, m.release_date, m.production_company,
                       m.distribution_company, m.running_time
                FROM reviews r
                LEFT JOIN sales s ON r.sales_id = s.id
                LEFT JOIN movies m ON s.movie_id = m.id
                WHERE r.user_id = %s AND r.sales_id = %s
                """
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute(query, (user_id, sales_id))
                result = cursor.fetchone()
                cursor.close()
                return result
        except Exception as e:
            print(f"리뷰 데이터 조회 오류: {e}")
            return None
    
    def get_all_reviews(self, limit: Optional[int] = None) -> List[Dict]:
        """모든 리뷰 데이터 가져오기"""
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT r.user_id, r.sales_id, r.rating as review_rating, r.review_comment, r.created_at,
                       s.movie_id, s.site_name, s.price, s.quality, s.is_limited_edition,
                       s.region_code, s.bluray_title,
                       m.title, m.director, m.release_date, m.production_company,
                       m.distribution_company, m.running_time
                FROM reviews r
                LEFT JOIN sales s ON r.sales_id = s.id
                LEFT JOIN movies m ON s.movie_id = m.id
                ORDER BY r.user_id, r.sales_id
                """
                if limit:
                    query += f" LIMIT {limit}"
                
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.execute(query)
                results = cursor.fetchall()
                cursor.close()
                return results
        except Exception as e:
            print(f"전체 리뷰 데이터 조회 오류: {e}")
            return []
    
    def normalize_review_rating(self, review_rating: float) -> float: #change this immideately
        """
        리뷰 평점을 0.5-5.0 범위로 정규화
        현재: -1, 0, 1 → 나중에: 0.5-5.0 범위
        """
        if review_rating == -1:
            return 1.0  # 부정적 → 낮은 점수
        elif review_rating == 0:
            return 3.0  # 중립적 → 중간 점수
        elif review_rating == 1:
            return 5.0  # 긍정적 → 높은 점수
        else:
            # 이미 0.5-5.0 범위인 경우 (미래 대비)
            return max(0.5, min(5.0, review_rating))
    
    def _load_movies_cache(self):
        """movies.csv 데이터를 캐시에 로드"""
        if self._movies_cache is not None:
            return  # 이미 로드됨
        
        try:
            import pandas as pd
            import os
            
            # movies.csv 파일 경로
            movies_file = "ml-latest-small/movies.csv"
            if not os.path.exists(movies_file):
                print(f"movies.csv 파일을 찾을 수 없습니다: {movies_file}")
                self._movies_cache = {}
                return
            
            # CSV 전체 로드 및 영화별 정보 딕셔너리화
            print("movies.csv 데이터를 로딩 중...")
            movies_df = pd.read_csv(movies_file)
            self._movies_cache = movies_df.set_index('movieId').to_dict('index')
            print(f"총 {len(self._movies_cache)}개 영화의 정보를 로드했습니다.")
                
        except Exception as e:
            print(f"movies.csv 로딩 오류: {e}")
            self._movies_cache = {}
    
    def get_movie_genres_from_csv(self, movie_id: int) -> List[str]:
        """movies.csv에서 영화 장르 가져오기 (캐시 활용)"""
        # 캐시가 로드되지 않았으면 로드
        self._load_movies_cache()
        
        # 캐시에서 해당 영화의 장르 반환
        movie_info = self._movies_cache.get(movie_id, {})
        genres_str = movie_info.get('genres', '')
        
        if genres_str and genres_str != '(no genres listed)':
            return genres_str.split('|')
        else:
            return []
    
    def extract_year_from_date(self, release_date) -> int:
        """release_date에서 연도 추출"""
        if release_date:
            if hasattr(release_date, 'year'):
                return release_date.year
            else:
                # 문자열인 경우 파싱 시도
                try:
                    return int(str(release_date)[:4])
                except:
                    return 2000
        return 2000
    
    def extract_runtime_minutes(self, running_time) -> int:
        """running_time에서 분 단위 추출"""
        if running_time:
            if hasattr(running_time, 'hour'):
                return running_time.hour * 60 + running_time.minute
            else:
                # 문자열 파싱 시도
                try:
                    # "HH:MM:SS" 형태 가정
                    parts = str(running_time).split(':')
                    return int(parts[0]) * 60 + int(parts[1])
                except:
                    return 120  # 기본값 2시간
        return 120
    
    def is_famous_director(self, director: str) -> bool:
        """유명 감독인지 확인"""
        if not director:
            return False
        return any(famous in director for famous in self.famous_directors)
    
    def get_quality_score(self, quality: str) -> float:
        """화질 코드에 따른 점수 반환"""
        if not quality:
            return 0.0
        
        quality_upper = quality.upper()
        if '4' in quality_upper or 'U' in quality_upper:  # 4K, UHD
            return self.weights['quality_4k']
        elif 'H' in quality_upper or 'B' in quality_upper:  # HD, Blu-ray
            return self.weights['quality_hd'] 
        else:  # SD 또는 기타
            return self.weights['quality_sd']
    
    def calculate_genre_score(self, genres: List[str]) -> float:
        """장르별 점수 계산"""
        if not genres:
            return 0.0
        
        score = 0.0
        for genre in genres:
            if genre in self.genre_preferences:
                score += self.genre_preferences[genre]
        
        # 최대 0.5점으로 제한 (너무 많은 장르로 인한 과도한 보너스 방지)
        return min(score, 0.5)
    
    def convert_single_rating(self, user_id: int, movie_id: int, original_rating: float, timestamp: int) -> Optional[Dict]:
        """
        개별 평점을 블루레이 평점으로 변환
        
        Args:
            user_id: 사용자 ID
            movie_id: 영화 ID  
            original_rating: 원본 평점
            timestamp: 타임스탬프
            
        Returns:
            변환된 평점 딕셔너리 또는 None
        """
        # 영화 정보 가져오기 (movies.csv에서)
        self._load_movies_cache()
        movie_info = self._movies_cache.get(movie_id, {})
        
        if not movie_info:
            # 영화 정보가 없으면 기본 변환만 수행
            bluray_rating = self.convert_rating_basic(original_rating)
            return {
                'userId': user_id,
                'movieId': movie_id,
                'original_rating': original_rating,
                'bluray_rating': round(bluray_rating, 1),
                'timestamp': timestamp
            }
        
        # 영화 특성을 고려한 블루레이 평점 계산
        bluray_rating = self.convert_rating_with_movie_features(original_rating, movie_id, movie_info)
        
        return {
            'userId': user_id,
            'movieId': movie_id,
            'original_rating': original_rating,
            'bluray_rating': round(bluray_rating, 1),
            'timestamp': timestamp
        }
    
    def convert_rating_basic(self, original_rating: float) -> float:
        """
        영화 특성 고려 없이 기본 평점 변환
        """
        # 기본 수식: y^ = α + β*x
        score = self.intercept + self.weights['base_rating'] * original_rating
        return max(0.5, min(5.0, score))
    
    def convert_rating_with_movie_features(self, original_rating: float, movie_id: int, movie_info: Dict) -> float:
        """
        영화 특성을 고려한 평점 변환
        """
        # 기본 점수
        score = self.intercept + self.weights['base_rating'] * original_rating
        
        # 장르 점수
        genres = self.get_movie_genres_from_csv(movie_id)
        genre_score = self.calculate_genre_score(genres)
        score += genre_score
        
        # 연도 점수 (제목에서 추출)
        title = movie_info.get('title', '')
        year = self.extract_year_from_title(title)
        year_score = self.weights['year_factor'] * max(0, year - 1980)
        score += year_score
        
        # 0-5 범위로 클리핑
        return max(0.5, min(5.0, score))
    
    def extract_year_from_title(self, title: str) -> int:
        """영화 제목에서 연도 추출"""
        import re
        match = re.search(r'\((\d{4})\)', title)
        return int(match.group(1)) if match else 2000
    
    def convert_review_to_movie_rating(self, user_id: int, sales_id: int) -> Optional[Dict]:
        """
        리뷰 평점을 영화 평점으로 역변환
        
        Args:
            user_id: 사용자 ID
            sales_id: Sales ID
            
        Returns:
            변환된 영화 평점 딕셔너리 또는 None
        """
        # 리뷰 데이터 가져오기
        review_data = self.get_review_data(user_id, sales_id)
        if not review_data:
            return None
        
        movie_id = review_data.get('movie_id')
        if not movie_id:
            print(f"User {user_id}, Sales {sales_id}에 연결된 영화가 없습니다.")
            return None
        
        # 리뷰 평점 정규화
        normalized_review_rating = self.normalize_review_rating(review_data.get('review_rating', 0))
        
        # 블루레이 → 영화 평점 역변환
        movie_rating = self.reverse_convert_rating(normalized_review_rating, movie_id, review_data)
        
        # 장르 정보 추가
        genres = self.get_movie_genres_from_csv(movie_id) if movie_id else []
        
        return {
            'user_id': user_id,
            'sales_id': sales_id,
            'movie_id': movie_id,
            'title': review_data.get('title', 'Unknown'),
            'director': review_data.get('director'),
            'genres': genres,
            'bluray_title': review_data.get('bluray_title'),
            'site_name': review_data.get('site_name'),
            'price': review_data.get('price'),
            'quality': review_data.get('quality'),
            'is_limited_edition': review_data.get('is_limited_edition'),
            'original_review_rating': review_data.get('review_rating'),
            'normalized_review_rating': normalized_review_rating,
            'converted_movie_rating': round(movie_rating, 1),
            'review_comment': review_data.get('review_comment'),
            'created_at': review_data.get('created_at')
        }
    
    def reverse_convert_rating(self, bluray_rating: float, movie_id: int, movie_data: Dict) -> float:
        """
        블루레이 평점을 영화 평점으로 역변환
        역변환 수식: x = (y - α - Σ(γi * feature_i)) / β
        
        Args:
            bluray_rating: 블루레이 평점 (정규화된)
            movie_id: 영화 ID
            movie_data: 영화 데이터
            
        Returns:
            변환된 영화 평점
        """
        # 블루레이 특성으로 인한 보너스 점수 계산
        feature_bonus = 0.0
        
        # 장르 보너스
        genres = self.get_movie_genres_from_csv(movie_id)
        genre_score = self.calculate_genre_score(genres)
        feature_bonus += genre_score
        
        # 연도 보너스 (제목에서 추출)
        title = movie_data.get('title', '')
        year = self.extract_year_from_title(title)
        year_score = self.weights['year_factor'] * max(0, year - 1980)
        feature_bonus += year_score
        
        # 감독 보너스
        if self.is_famous_director(movie_data.get('director')):
            feature_bonus += self.weights['director_factor']
        
        # 역변환 수식 적용: x = (y - α - feature_bonus) / β
        movie_rating = (bluray_rating - self.intercept - feature_bonus) / self.weights['base_rating']
        
        # 0.5-5.0 범위로 클리핑
        return max(0.5, min(5.0, movie_rating))
    
    def batch_convert_reviews_to_ratings(self, limit: Optional[int] = None) -> List[Dict]:
        """
        reviews 테이블의 모든 리뷰를 영화 평점으로 변환
        
        Args:
            limit: 처리할 최대 리뷰 수
            
        Returns:
            변환된 평점 리스트
        """
        # 모든 리뷰 데이터 가져오기
        reviews_data = self.get_all_reviews(limit)
        
        if not reviews_data:
            print("리뷰 데이터를 찾을 수 없습니다.")
            return []
        
        print(f"총 {len(reviews_data)}개의 리뷰를 변환합니다...")
        
        converted_ratings = []
        failed_count = 0
        
        for i, review in enumerate(reviews_data):
            if i % 100 == 0:
                print(f"진행률: {i}/{len(reviews_data)} ({i/len(reviews_data)*100:.1f}%)")
            
            try:
                # 리뷰 평점 정규화
                normalized_rating = self.normalize_review_rating(review.get('review_rating', 0))
                
                # 영화 평점으로 역변환
                movie_id = review.get('movie_id')
                if movie_id:
                    movie_rating = self.reverse_convert_rating(normalized_rating, movie_id, review)
                    
                    # 장르 정보 추가
                    genres = self.get_movie_genres_from_csv(movie_id)
                    
                    result = {
                        'user_id': review.get('user_id'),
                        'sales_id': review.get('sales_id'),
                        'movie_id': movie_id,
                        'title': review.get('title', 'Unknown'),
                        'director': review.get('director'),
                        'genres': genres,
                        'bluray_title': review.get('bluray_title'),
                        'site_name': review.get('site_name'),
                        'price': review.get('price'),
                        'quality': review.get('quality'),
                        'is_limited_edition': review.get('is_limited_edition'),
                        'original_review_rating': review.get('review_rating'),
                        'normalized_review_rating': normalized_rating,
                        'converted_movie_rating': round(movie_rating, 1),
                        'review_comment': review.get('review_comment'),
                        'created_at': review.get('created_at')
                    }
                    
                    converted_ratings.append(result)
                else:
                    failed_count += 1
                    
            except Exception as e:
                print(f"리뷰 변환 오류 (User: {review.get('user_id')}, Sales: {review.get('sales_id')}): {e}")
                failed_count += 1
        
        print(f"변환 완료! 성공: {len(converted_ratings)}개, 실패: {failed_count}개")
        return converted_ratings

    def calculate_bluray_rating_for_sales(self, sales_id: int, base_rating: Optional[float] = None) -> Optional[Dict]:
        """
        Sales ID를 기반으로 블루레이 평가 계산 (기존 메서드 유지)
        
        Args:
            sales_id: Sales 테이블의 ID
            base_rating: 기본 평가 (없으면 DB에서 조회)
            
        Returns:
            평가 결과 딕셔너리 또는 None
        """
        # 판매 데이터 가져오기
        sales_data = self.get_sales_data(sales_id)
        if not sales_data:
            return None
        
        movie_id = sales_data.get('movie_id')
        if not movie_id:
            print(f"Sales ID {sales_id}에 연결된 영화가 없습니다.")
            return None
        
        # 기본 평가 설정 (ratings.csv에서 가져오기)
        if base_rating is None:
            ratings = self.get_movie_ratings_from_csv(movie_id)
            base_rating = sum(ratings) / len(ratings) if ratings else 4.0
        
        # 블루레이 평가 계산
        bluray_rating = self.calculate_bluray_score(sales_data, base_rating, movie_id)
        
        # 장르 정보 추가
        genres = self.get_movie_genres_from_csv(movie_id) if movie_id else []
        
        # 결과 반환
        return {
            'sales_id': sales_id,
            'movie_id': movie_id,
            'title': sales_data.get('title', 'Unknown'),
            'director': sales_data.get('director'),
            'genres': genres,
            'base_rating': base_rating,
            'bluray_rating': round(bluray_rating, 2),
            'price': sales_data.get('price'),
            'quality': sales_data.get('quality'),
            'is_limited_edition': sales_data.get('is_limited_edition'),
            'site_name': sales_data.get('site_name'),
            'region_code': sales_data.get('region_code'),
            'bluray_title': sales_data.get('bluray_title')
        }
    
    def calculate_bluray_score(self, sales_data: Dict, base_rating: float, movie_id: int) -> float:
        """
        실제 블루레이 평가 계산 로직
        수식: y^ = α + β*x + γ1*Director + γ2*Year + γ3*Genres + γ4*Quality + γ5*Price + γ6*LimitedEdition + ...
        """
        # 기본 점수 (α + β*x)
        score = self.intercept + self.weights['base_rating'] * base_rating
        
        # 감독 점수
        if self.is_famous_director(sales_data.get('director')):
            score += self.weights['director_factor']
        
        # 연도 점수 (최신작일수록 높은 점수)
        year = self.extract_year_from_date(sales_data.get('release_date'))
        year_score = self.weights['year_factor'] * max(0, year - 1980)
        score += year_score
        
        # 러닝타임 점수 (적절한 길이 선호)
        runtime = self.extract_runtime_minutes(sales_data.get('running_time'))
        # 90-150분이 최적, 그 외는 약간 감점
        if 90 <= runtime <= 150:
            runtime_bonus = self.weights['running_time_factor'] * 10
        else:
            runtime_bonus = self.weights['running_time_factor'] * max(0, 10 - abs(120 - runtime) / 10)
        score += runtime_bonus
        
        # 장르 점수 (movies.csv에서 가져오기)
        if movie_id:
            genres = self.get_movie_genres_from_csv(movie_id)
            genre_score = self.calculate_genre_score(genres)
            score += genre_score
        
        # 화질 점수
        quality_score = self.get_quality_score(sales_data.get('quality'))
        score += quality_score
        
        # 가격 점수 (높은 가격은 평가 하락)
        price = sales_data.get('price', 0)
        if price > 0:
            price_penalty = self.weights['price_factor'] * price
            score += price_penalty
        
        # 리미티드 에디션 보너스
        if sales_data.get('is_limited_edition'):
            score += self.weights['limited_edition']
        
        # 지역 코드 점수 (1: 국내, 3: 수입 등)
        region_code = sales_data.get('region_code', 1)
        if region_code == 1:  # 국내 판매
            score += self.weights['region_code_factor']
        
        # 사이트별 신뢰도
        site_name = sales_data.get('site_name', '').lower()
        if site_name in self.weights['site_preference']:
            score += self.weights['site_preference'][site_name]
        
        # 0-5 범위로 클리핑
        return max(0.5, min(5.0, score))
    
    def search_and_rate_bluray(self, search_term: str, limit: int = 10) -> List[Dict]:
        """
        블루레이 검색 및 평가
        
        Args:
            search_term: 검색어 (영화 제목)
            limit: 최대 결과 수
            
        Returns:
            평가 결과 리스트
        """
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT s.id
                FROM sales s
                LEFT JOIN movies m ON s.movie_id = m.id
                WHERE s.bluray_title LIKE %s OR m.title LIKE %s
                LIMIT %s
                """
                cursor = conn.cursor()
                search_pattern = f"%{search_term}%"
                cursor.execute(query, (search_pattern, search_pattern, limit))
                results = cursor.fetchall()
                cursor.close()
                
                # 각 결과에 대해 평가 계산
                ratings = []
                for row in results:
                    sales_id = row[0]
                    rating_result = self.calculate_bluray_rating_for_sales(sales_id)
                    if rating_result:
                        ratings.append(rating_result)
                
                # 평가 순으로 정렬
                ratings.sort(key=lambda x: x['bluray_rating'], reverse=True)
                return ratings
                
        except Exception as e:
            print(f"검색 오류: {e}")
            return []
    
    def get_top_rated_blurays(self, limit: int = 20) -> List[Dict]:
        """상위 평가 블루레이 목록 반환"""
        try:
            with get_mysql_connection() as conn:
                query = """
                SELECT s.id
                FROM sales s
                LEFT JOIN movies m ON s.movie_id = m.id
                WHERE s.movie_id IS NOT NULL
                ORDER BY s.id
                LIMIT %s
                """
                cursor = conn.cursor()
                cursor.execute(query, (limit * 2,))  # 여유분 확보
                results = cursor.fetchall()
                cursor.close()
                
                # 각 결과에 대해 평가 계산
                ratings = []
                for row in results:
                    sales_id = row[0]
                    rating_result = self.calculate_bluray_rating_for_sales(sales_id)
                    if rating_result:
                        ratings.append(rating_result)
                    
                    if len(ratings) >= limit:
                        break
                
                # 평가 순으로 정렬
                ratings.sort(key=lambda x: x['bluray_rating'], reverse=True)
                return ratings[:limit]
                
        except Exception as e:
            print(f"상위 평가 조회 오류: {e}")
            return []
    
    def print_rating_details(self, result: Dict):
        """평가 결과 상세 출력"""
        print(f"\n=== {result['title']} ===")
        print(f"감독: {result['director'] or 'Unknown'}")
        print(f"장르: {', '.join(result.get('genres', [])) if result.get('genres') else 'Unknown'}")
        print(f"기본 평가: {result['base_rating']:.1f}/5.0")
        print(f"블루레이 평가: {result['bluray_rating']:.1f}/5.0")
        print(f"가격: {result['price']:,}원" if result['price'] else "가격: 정보 없음")
        print(f"화질: {result['quality'] or 'Unknown'}")
        print(f"리미티드 에디션: {'예' if result['is_limited_edition'] else '아니오'}")
        print(f"판매 사이트: {result['site_name'] or 'Unknown'}")
        print(f"지역 코드: {result['region_code']}")
        print(f"블루레이 제목: {result['bluray_title'] or result['title']}")
    
    def demo_single_rating(self, sales_id: int):
        """단일 블루레이 평가 데모"""
        result = self.calculate_bluray_rating_for_sales(sales_id)
        if result:
            self.print_rating_details(result)
        else:
            print(f"Sales ID {sales_id}에 대한 데이터를 찾을 수 없습니다.")
    
    def demo_search_rating(self, search_term: str, limit: int = 5):
        """검색 기반 평가 데모"""
        print(f"\n=== '{search_term}' 검색 결과 ===")
        results = self.search_and_rate_bluray(search_term, limit)
        
        if not results:
            print("검색 결과가 없습니다.")
            return
        
        for i, result in enumerate(results, 1):
            print(f"\n{i}. {result['title']} - 평가: {result['bluray_rating']:.1f}/5.0")
            print(f"   가격: {result['price']:,}원, 화질: {result['quality']}, 사이트: {result['site_name']}")
    
    def print_statistics(self, results: List[Dict]):
        """통계 정보 출력"""
        if not results:
            return
        
        ratings = [r['bluray_rating'] for r in results]
        prices = [r['price'] for r in results if r['price']]
        
        print(f"\n=== 통계 정보 ===")
        print(f"총 항목 수: {len(results)}")
        print(f"평균 블루레이 평가: {sum(ratings)/len(ratings):.2f}")
        print(f"최고 평가: {max(ratings):.1f}")
        print(f"최저 평가: {min(ratings):.1f}")
        if prices:
            print(f"평균 가격: {sum(prices)/len(prices):,.0f}원")
            print(f"최고 가격: {max(prices):,}원")
            print(f"최저 가격: {min(prices):,}원")
    
if __name__ == "__main__":
    # 양방향 변환기 데모
    print("=== 블루레이 ↔ 영화 평점 양방향 변환 시스템 ===")
    
    converter = BlurayRatingConverter()
    
    try:
        # 1. 블루레이 리뷰 → 영화 평점 역변환 데모
        print("\n1. 블루레이 리뷰 → 영화 평점 역변환 (User: 1, Sales: 1)")
        review_result = converter.convert_review_to_movie_rating(1, 1)  # user_id=1, sales_id=1
        if review_result:
            print(f"사용자 ID: {review_result['user_id']}")
            print(f"Sales ID: {review_result['sales_id']}")
            print(f"영화: {review_result['title']}")
            print(f"블루레이 제목: {review_result['bluray_title']}")
            print(f"장르: {', '.join(review_result['genres']) if review_result['genres'] else 'Unknown'}")
            print(f"원본 리뷰 평점: {review_result['original_review_rating']}")
            print(f"정규화된 블루레이 평점: {review_result['normalized_review_rating']:.1f}")
            print(f"변환된 영화 평점: {review_result['converted_movie_rating']:.1f}/5.0")
            print(f"리뷰 댓글: {review_result['review_comment'][:50] if review_result['review_comment'] else 'None'}...")
        else:
            print("리뷰 데이터를 찾을 수 없습니다.")
        
        # 2. 단일 Sales ID 평가 데모 (기존 기능)
        print("\n2. 단일 블루레이 평가 (Sales ID: 1)")
        converter.demo_single_rating(1)
        
        # 3. 평점 정규화 데모
        print("\n3. 리뷰 평점 정규화 데모")
        test_ratings = [-1, 0, 1, 2.5, 4.5]
        for rating in test_ratings:
            normalized = converter.normalize_review_rating(rating)
            print(f"  {rating:4.1f} → {normalized:.1f}")
        
        # 4. 역변환 수식 설명
        print("\n=== 역변환 수식 ===")
        print("블루레이 → 영화: x = (y - α - Σ(γi * feature_i)) / β")
        print("여기서:")
        print(f"  α (intercept): {converter.intercept}")
        print(f"  β (base_rating): {converter.weights['base_rating']}")
        print("  feature_i: 장르, 연도, 감독 등의 보너스")
        
        print("\n=== 사용법 ===")
        print("1. 리뷰 → 영화 평점: converter.convert_review_to_movie_rating(user_id, sales_id)")
        print("2. 배치 변환: converter.batch_convert_reviews_to_ratings(limit)")
        print("3. 평점 정규화: converter.normalize_review_rating(rating)")
        print("4. 전체 변환 스크립트: python convert_reviews_to_movie_ratings.py")
        
    except Exception as e:
        print(f"데모 실행 중 오류 발생: {e}")
        print("데이터베이스 연결을 확인해주세요.")
