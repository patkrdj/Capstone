#!/usr/bin/env python3
"""
reviews 테이블의 블루레이 평점을 영화 평점으로 역변환하는 스크립트
블루레이 리뷰 → 영화 평점 변환
"""

import pandas as pd
import os
from bluray_rating_converter import BlurayRatingConverter
from typing import Optional
import sys

def convert_reviews_to_movie_ratings(
    output_file: str = "movie_ratings_from_reviews.csv",
    limit: Optional[int] = None
):
    """
    reviews 테이블의 모든 리뷰를 영화 평점으로 변환
    
    Args:
        output_file: 출력 CSV 파일 경로
        limit: 처리할 최대 리뷰 수 (None이면 전체)
    """
    
    print("=== 블루레이 리뷰 → 영화 평점 변환 시작 ===")
    
    # 변환기 초기화
    converter = BlurayRatingConverter()
    
    # 역변환에 맞는 가중치 조정
    reverse_weights = {
        'base_rating': 0.65,     # 기본 평점 가중치
        'year_factor': 0.003,    # 연도 요인
        'director_factor': 0.12, # 감독 요인
    }
    converter.update_weights(reverse_weights)
    
    print("적용된 가중치:")
    for key, value in reverse_weights.items():
        print(f"  {key}: {value}")
    
    # 배치 변환 실행
    converted_ratings = converter.batch_convert_reviews_to_ratings(limit=limit)
    
    if not converted_ratings:
        print("변환된 데이터가 없습니다.")
        return None
    
    # DataFrame으로 변환 후 저장
    df = pd.DataFrame(converted_ratings)
    df.to_csv(output_file, index=False, encoding='utf-8-sig')
    
    print(f"결과가 {output_file}에 저장되었습니다.")
    
    # 통계 분석
    print_conversion_statistics(df)
    
    # 샘플 결과 출력
    print_sample_results(df)
    
    return df

def print_conversion_statistics(df: pd.DataFrame):
    """변환 결과 통계 출력"""
    print(f"\n=== 변환 통계 ===")
    print(f"총 변환된 평점 수: {len(df)}")
    
    # 원본 리뷰 평점 분포 (-1, 0, 1)
    print("\n원본 리뷰 평점 분포:")
    original_dist = df['original_review_rating'].value_counts().sort_index()
    for rating, count in original_dist.items():
        print(f"  {rating:2.0f}: {count:,}개 ({count/len(df)*100:.1f}%)")
    
    # 정규화된 블루레이 평점 분포
    print("\n정규화된 블루레이 평점 분포:")
    normalized_dist = df['normalized_review_rating'].value_counts().sort_index()
    for rating, count in normalized_dist.items():
        print(f"  {rating:.1f}: {count:,}개 ({count/len(df)*100:.1f}%)")
    
    # 변환된 영화 평점 통계
    movie_ratings = df['converted_movie_rating']
    print(f"\n변환된 영화 평점 통계:")
    print(f"  평균: {movie_ratings.mean():.2f}")
    print(f"  중앙값: {movie_ratings.median():.2f}")
    print(f"  최소값: {movie_ratings.min():.1f}")
    print(f"  최대값: {movie_ratings.max():.1f}")
    print(f"  표준편차: {movie_ratings.std():.2f}")
    
    # 영화 평점 분포 (0.5 단위)
    print(f"\n영화 평점 분포:")
    rating_ranges = [
        (0.5, 1.5, "0.5-1.5"),
        (1.5, 2.5, "1.5-2.5"), 
        (2.5, 3.5, "2.5-3.5"),
        (3.5, 4.5, "3.5-4.5"),
        (4.5, 5.0, "4.5-5.0")
    ]
    
    for low, high, label in rating_ranges:
        count = len(df[(df['converted_movie_rating'] >= low) & (df['converted_movie_rating'] < high)])
        if low == 4.5:  # 마지막 구간은 5.0 포함
            count = len(df[df['converted_movie_rating'] >= low])
        print(f"  {label}: {count:,}개 ({count/len(df)*100:.1f}%)")

def print_sample_results(df: pd.DataFrame, n: int = 15):
    """샘플 결과 출력"""
    print(f"\n=== 변환 결과 샘플 ({n}개) ===")
    
    # 다양한 케이스 샘플링
    samples = []
    
    # 각 원본 평점별로 5개씩 샘플링
    for original_rating in [-1, 0, 1]:
        subset = df[df['original_review_rating'] == original_rating].head(5)
        if not subset.empty:
            samples.append(subset)
    
    if samples:
        sample_df = pd.concat(samples, ignore_index=True)
    else:
        sample_df = df.head(n)
    
    print("사용자 | SalesID | 영화ID | 원본 | 정규화 | 영화평점 | 제목")
    print("-" * 80)
    
    for _, row in sample_df.iterrows():
        title = row['title'][:20] + "..." if len(row['title']) > 20 else row['title']
        print(f"{row['user_id']:6d} | {row['sales_id']:7d} | {row['movie_id']:6d} | "
              f"{row['original_review_rating']:4.0f} | {row['normalized_review_rating']:6.1f} | "
              f"{row['converted_movie_rating']:8.1f} | {title}")

def analyze_conversion_patterns(df: pd.DataFrame):
    """변환 패턴 분석"""
    print(f"\n=== 변환 패턴 분석 ===")
    
    # 원본 평점별 평균 변환 결과
    print("원본 리뷰 평점별 평균 영화 평점:")
    for original_rating in [-1, 0, 1]:
        subset = df[df['original_review_rating'] == original_rating]
        if len(subset) > 0:
            avg_movie_rating = subset['converted_movie_rating'].mean()
            print(f"  {original_rating:2.0f} → {avg_movie_rating:.2f} (샘플 {len(subset):,}개)")
    
    # 장르별 영향 분석
    print(f"\n장르별 평균 영화 평점 (상위 10개):")
    
    # 장르별 데이터 수집
    genre_ratings = {}
    for _, row in df.iterrows():
        genres = row.get('genres', [])
        if genres:
            for genre in genres:
                if genre not in genre_ratings:
                    genre_ratings[genre] = []
                genre_ratings[genre].append(row['converted_movie_rating'])
    
    # 장르별 평균 계산 및 정렬
    genre_averages = []
    for genre, ratings in genre_ratings.items():
        if len(ratings) >= 10:  # 최소 10개 이상의 샘플
            avg_rating = sum(ratings) / len(ratings)
            genre_averages.append((genre, avg_rating, len(ratings)))
    
    # 평균 평점 순으로 정렬
    genre_averages.sort(key=lambda x: x[1], reverse=True)
    
    for genre, avg_rating, count in genre_averages[:10]:
        print(f"  {genre:12s}: {avg_rating:.2f} (샘플 {count:,}개)")

def create_ratings_csv_format(df: pd.DataFrame, output_file: str = "converted_ratings.csv"):
    """ratings.csv 형식으로 변환된 결과 저장"""
    print(f"\n=== ratings.csv 형식으로 저장 ===")
    
    # ratings.csv 형식: userId,movieId,rating,timestamp
    # created_at이 있으면 사용, 없으면 현재 시간
    timestamps = []
    for _, row in df.iterrows():
        if row.get('created_at'):
            try:
                # created_at을 timestamp로 변환
                import pandas as pd
                ts = pd.to_datetime(row['created_at']).timestamp()
                timestamps.append(int(ts))
            except:
                timestamps.append(int(pd.Timestamp.now().timestamp()))
        else:
            timestamps.append(int(pd.Timestamp.now().timestamp()))
    
    ratings_format = pd.DataFrame({
        'userId': df['user_id'],
        'movieId': df['movie_id'],
        'rating': df['converted_movie_rating'],
        'timestamp': timestamps
    })
    
    ratings_format.to_csv(output_file, index=False)
    print(f"ratings.csv 형식으로 {output_file}에 저장되었습니다.")
    print(f"총 {len(ratings_format)}개의 평점 데이터")

def main():
    """메인 실행 함수"""
    # 명령행 인수 처리
    limit = None
    if len(sys.argv) > 1:
        try:
            limit = int(sys.argv[1])
            print(f"제한 모드: {limit}개 리뷰만 처리")
        except ValueError:
            print("잘못된 limit 값입니다. 전체 리뷰를 처리합니다.")
    
    # 변환 실행
    result_df = convert_reviews_to_movie_ratings(limit=limit)
    
    if result_df is not None:
        # 패턴 분석
        analyze_conversion_patterns(result_df)
        
        # ratings.csv 형식으로도 저장
        create_ratings_csv_format(result_df)
        
        print(f"\n=== 변환 완료 ===")
        print("블루레이 리뷰가 영화 평점으로 성공적으로 변환되었습니다!")
        print("이제 이 데이터를 영화 추천 시스템에서 사용할 수 있습니다.")

if __name__ == "__main__":
    main()
