#!/usr/bin/env python3
"""
데이터베이스 기반 블루레이 평가 생성 스크립트
Sales 테이블의 모든 블루레이에 대해 평가를 계산하고 CSV로 저장합니다.
"""

import sys
import os
import pandas as pd
from bluray_rating_converter import BlurayRatingConverter, get_mysql_connection

def generate_all_bluray_ratings(output_file="database_bluray_ratings.csv", limit=None):
    """데이터베이스의 모든 블루레이에 대해 평가 생성"""
    
    print("=== 데이터베이스 기반 블루레이 평가 생성 ===")
    
    # 변환기 초기화
    converter = BlurayRatingConverter()
    
    # 사용자 정의 가중치 설정
    custom_weights = {
        'base_rating': 0.6,        # 원본 평가 비중
        'director_factor': 0.2,    # 감독 요인 증가
        'quality_4k': 0.5,         # 4K 화질 중요도 증가
        'quality_hd': 0.25,        # HD 화질 중요도
        'limited_edition': 0.3,    # 리미티드 에디션 가중치 증가
        'price_factor': -0.0001,   # 가격 민감도 조정
        'region_code_factor': 0.08 # 지역 코드 요인 증가
    }
    
    converter.update_weights(custom_weights)
    
    print("적용된 가중치:")
    for key, value in custom_weights.items():
        print(f"  {key}: {value}")
    
    try:
        # Sales 테이블에서 모든 ID 조회
        with get_mysql_connection() as conn:
            query = """
            SELECT s.id 
            FROM sales s
            LEFT JOIN movies m ON s.movie_id = m.id
            WHERE s.movie_id IS NOT NULL
            ORDER BY s.id
            """
            if limit:
                query += f" LIMIT {limit}"
            
            cursor = conn.cursor()
            cursor.execute(query)
            sales_ids = [row[0] for row in cursor.fetchall()]
            cursor.close()
        
        print(f"총 {len(sales_ids)}개의 블루레이 항목을 처리합니다...")
        
        # 각 Sales ID에 대해 평가 계산
        all_ratings = []
        failed_count = 0
        
        for i, sales_id in enumerate(sales_ids):
            if i % 50 == 0:
                print(f"진행률: {i}/{len(sales_ids)} ({i/len(sales_ids)*100:.1f}%)")
            
            rating_result = converter.calculate_bluray_rating_for_sales(sales_id)
            if rating_result:
                all_ratings.append(rating_result)
            else:
                failed_count += 1
        
        print(f"처리 완료! 성공: {len(all_ratings)}개, 실패: {failed_count}개")
        
        # DataFrame으로 변환 후 저장
        if all_ratings:
            df = pd.DataFrame(all_ratings)
            df.to_csv(output_file, index=False, encoding='utf-8-sig')
            
            print(f"결과가 {output_file}에 저장되었습니다.")
            
            # 통계 정보 출력
            print_statistics(df)
            
            # 상위 평가 블루레이 출력
            print_top_ratings(df, 10)
            
            return df
        else:
            print("생성된 평가 데이터가 없습니다.")
            return None
            
    except Exception as e:
        print(f"오류가 발생했습니다: {e}")
        return None

def print_statistics(df):
    """통계 정보 출력"""
    print(f"\n=== 통계 정보 ===")
    print(f"총 블루레이 수: {len(df)}")
    print(f"평균 기본 평가: {df['base_rating'].mean():.2f}")
    print(f"평균 블루레이 평가: {df['bluray_rating'].mean():.2f}")
    print(f"최고 블루레이 평가: {df['bluray_rating'].max():.2f}")
    print(f"최저 블루레이 평가: {df['bluray_rating'].min():.2f}")
    
    # 가격 통계
    price_data = df[df['price'].notna() & (df['price'] > 0)]
    if not price_data.empty:
        print(f"평균 가격: {price_data['price'].mean():,.0f}원")
        print(f"최고 가격: {price_data['price'].max():,}원")
        print(f"최저 가격: {price_data['price'].min():,}원")
    
    # 화질 분포
    print(f"\n화질 분포:")
    quality_dist = df['quality'].value_counts()
    for quality, count in quality_dist.items():
        print(f"  {quality}: {count}개 ({count/len(df)*100:.1f}%)")
    
    # 리미티드 에디션 비율
    limited_count = df['is_limited_edition'].sum()
    print(f"\n리미티드 에디션 비율: {limited_count}/{len(df)} ({limited_count/len(df)*100:.1f}%)")
    
    # 평가 분포
    print(f"\n블루레이 평가 분포:")
    rating_ranges = [(0, 2), (2, 3), (3, 4), (4, 5)]
    for low, high in rating_ranges:
        count = len(df[(df['bluray_rating'] >= low) & (df['bluray_rating'] < high)])
        print(f"  {low}-{high}점: {count}개 ({count/len(df)*100:.1f}%)")

def print_top_ratings(df, limit=10):
    """상위 평가 블루레이 출력"""
    print(f"\n=== 상위 {limit}개 블루레이 ===")
    top_df = df.nlargest(limit, 'bluray_rating')
    
    for i, row in top_df.iterrows():
        print(f"{len(top_df) - len(top_df[top_df['bluray_rating'] > row['bluray_rating']]):2d}. "
              f"{row['title']} - {row['bluray_rating']:.2f}/5.0")
        print(f"    감독: {row['director'] or 'Unknown'}, "
              f"가격: {row['price']:,}원, "
              f"화질: {row['quality']}, "
              f"사이트: {row['site_name']}")

def search_and_analyze(search_term, limit=5):
    """특정 영화 검색 및 분석"""
    print(f"\n=== '{search_term}' 검색 결과 ===")
    
    converter = BlurayRatingConverter()
    results = converter.search_and_rate_bluray(search_term, limit)
    
    if results:
        for i, result in enumerate(results, 1):
            print(f"{i}. {result['title']} - {result['bluray_rating']:.2f}/5.0")
            converter.print_rating_details(result)
            print("-" * 50)
    else:
        print("검색 결과가 없습니다.")

def main():
    """메인 실행 함수"""
    if len(sys.argv) > 1:
        if sys.argv[1] == "search":
            # 검색 모드
            search_term = input("검색할 영화 제목을 입력하세요: ")
            search_and_analyze(search_term)
        elif sys.argv[1] == "demo":
            # 데모 모드
            converter = BlurayRatingConverter()
            print("데모 모드 실행...")
            converter.demo_single_rating(1)
            converter.demo_search_rating("어벤져스", 3)
        else:
            print("사용법: python generate_bluray_ratings.py [search|demo]")
    else:
        # 전체 생성 모드
        limit = None
        if len(sys.argv) > 2:
            try:
                limit = int(sys.argv[2])
            except ValueError:
                print("잘못된 limit 값입니다.")
                return
        
        generate_all_bluray_ratings(limit=limit)

if __name__ == "__main__":
    main()
