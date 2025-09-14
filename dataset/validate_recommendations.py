import pandas as pd
import numpy as np
from content_based_filtering import SalesBasedFiltering, get_mysql_connection
import random


def analyze_sales_features():
    """Sales 테이블의 특성 분포 분석"""
    print("=== Sales 테이블 특성 분석 ===")
    
    with get_mysql_connection() as conn:
        query = """
        SELECT id, movie_id, site_name, price, quality, region_code, is_limited_edition 
        FROM sales 
        WHERE movie_id IS NOT NULL
        """
        df = pd.read_sql(query, con=conn)
    
    print(f"총 Sales 항목 수: {len(df)}")
    print(f"고유 영화 수: {df['movie_id'].nunique()}")
    
    # 특성별 분포
    print("\n특성별 분포:")
    print(f"- Site: {df['site_name'].value_counts().to_dict()}")
    print(f"- Quality: {df['quality'].value_counts().to_dict()}")
    print(f"- Region: {df['region_code'].value_counts().to_dict()}")
    print(f"- Limited Edition: {df['is_limited_edition'].value_counts().to_dict()}")
    
    # 가격 분포
    price_stats = df['price'].describe()
    print(f"\n가격 통계:")
    print(f"- 평균: {price_stats['mean']:.0f}원")
    print(f"- 최소: {price_stats['min']:.0f}원")
    print(f"- 최대: {price_stats['max']:.0f}원")
    
    return df


def validate_user_profiles(sbf, user_ids=[1, 2, 3]):
    """사용자 프로필 검증"""
    print("\n=== 사용자 프로필 검증 ===")
    
    for user_id in user_ids:
        print(f"\n사용자 {user_id}:")
        
        # 사용자 평점 영화들
        user_ratings = sbf.ratings_df[sbf.ratings_df['userId'] == user_id]
        rated_movies = user_ratings['movieId'].tolist()
        print(f"평점 준 영화 ID: {rated_movies[:10]}{'...' if len(rated_movies) > 10 else ''} (총 {len(rated_movies)}개)")
        
        # 해당 영화들의 Sales 특성 확인
        with get_mysql_connection() as conn:
            movie_ids_str = ','.join(map(str, rated_movies[:5]))  # 처음 5개만 확인
            query = f"""
            SELECT movie_id, site_name, quality, region_code, is_limited_edition, price
            FROM sales 
            WHERE movie_id IN ({movie_ids_str})
            """
            sales_df = pd.read_sql(query, con=conn)
        
        print("평점 준 영화들의 Sales 특성:")
        for _, row in sales_df.head(10).iterrows():
            print(f"  영화 {row['movie_id']}: {row['site_name']}, {row['quality']}, 지역{row['region_code']}, 한정판:{row['is_limited_edition']}, {row['price']}원")


def test_recommendation_logic(sbf, user_id=1, verbose=True):
    """추천 로직 상세 검증"""
    print(f"\n=== 사용자 {user_id} 추천 로직 검증 ===")
    
    # 1. 사용자 프로필 벡터 생성
    profile = sbf._build_user_profile_vector(user_id)
    if profile is None:
        print("사용자 프로필을 생성할 수 없습니다.")
        return
    
    print(f"사용자 프로필 벡터 크기: {profile.shape}")
    print(f"프로필 벡터 norm: {np.linalg.norm(profile):.4f}")
    
    # 2. 모든 sales에 대한 유사도 계산
    scores = sbf.item_feature_matrix @ profile.reshape(-1, 1)
    scores = np.asarray(scores).ravel()
    
    print(f"유사도 점수 통계:")
    print(f"- 평균: {scores.mean():.4f}")
    print(f"- 최대: {scores.max():.4f}")
    print(f"- 최소: {scores.min():.4f}")
    print(f"- 표준편차: {scores.std():.4f}")
    
    # 3. 상위 추천 항목들의 특성 분석
    top_indices = np.argsort(scores)[::-1][:10]
    
    print(f"\n상위 10개 추천 항목:")
    with get_mysql_connection() as conn:
        for i, idx in enumerate(top_indices):
            sale_id = sbf.sale_index_to_id[idx]
            movie_id = sbf.sale_index_to_movie_id[idx]
            score = scores[idx]
            
            # Sales 정보 조회
            query = f"SELECT * FROM sales WHERE id = {sale_id}"
            sale_info = pd.read_sql(query, con=conn).iloc[0]
            
            print(f"{i+1:2d}. saleId={sale_id}, movieId={movie_id}, 점수={score:.4f}")
            print(f"    특성: {sale_info['site_name']}, {sale_info['quality']}, 지역{sale_info['region_code']}, 한정판:{sale_info['is_limited_edition']}, {sale_info['price']}원")


def cross_validation_test(sbf, test_ratio=0.2):
    """교차 검증 테스트"""
    print(f"\n=== 교차 검증 테스트 (테스트 비율: {test_ratio}) ===")
    
    all_users = sbf.ratings_df['userId'].unique()
    results = []
    
    for user_id in all_users[:5]:  # 처음 5명만 테스트
        user_ratings = sbf.ratings_df[sbf.ratings_df['userId'] == user_id]
        
        if len(user_ratings) < 10:  # 최소 10개 평점이 있어야 테스트 가능
            continue
            
        # 평점을 train/test로 분할
        n_test = max(1, int(len(user_ratings) * test_ratio))
        test_indices = random.sample(range(len(user_ratings)), n_test)
        
        train_ratings = user_ratings.drop(user_ratings.iloc[test_indices].index)
        test_ratings = user_ratings.iloc[test_indices]
        
        # 임시로 train 데이터만으로 프로필 생성
        original_ratings = sbf.ratings_df.copy()
        sbf.ratings_df = pd.concat([
            sbf.ratings_df[sbf.ratings_df['userId'] != user_id],
            train_ratings
        ])
        
        # 추천 생성
        recommendations = sbf.recommend_sales(user_id, n_recommendations=20, min_score=0.0)
        
        # test 영화들이 추천에 포함되는지 확인
        test_movie_ids = set(test_ratings['movieId'].tolist())
        rec_movie_ids = set([rec['movieId'] for rec in recommendations if rec['movieId'] is not None])
        
        hits = len(test_movie_ids.intersection(rec_movie_ids))
        precision = hits / len(recommendations) if recommendations else 0
        recall = hits / len(test_movie_ids) if test_movie_ids else 0
        
        results.append({
            'user_id': user_id,
            'hits': hits,
            'precision': precision,
            'recall': recall,
            'test_items': len(test_movie_ids),
            'recommendations': len(recommendations)
        })
        
        print(f"사용자 {user_id}: Hits={hits}/{len(test_movie_ids)}, Precision={precision:.3f}, Recall={recall:.3f}")
        
        # 원래 데이터 복원
        sbf.ratings_df = original_ratings
    
    if results:
        avg_precision = np.mean([r['precision'] for r in results])
        avg_recall = np.mean([r['recall'] for r in results])
        print(f"\n평균 Precision: {avg_precision:.3f}")
        print(f"평균 Recall: {avg_recall:.3f}")


def diversity_analysis(sbf, user_ids=[1, 2, 3, 4, 5]):
    """추천 다양성 분석"""
    print(f"\n=== 추천 다양성 분석 ===")
    
    all_recommendations = []
    
    for user_id in user_ids:
        recs = sbf.recommend_sales(user_id, n_recommendations=10)
        rec_features = []
        
        for rec in recs:
            sale_id = rec['saleId']
            # Sales 특성 조회
            with get_mysql_connection() as conn:
                query = f"SELECT site_name, quality, region_code, is_limited_edition FROM sales WHERE id = {sale_id}"
                features = pd.read_sql(query, con=conn).iloc[0]
                rec_features.append(f"{features['site_name']}_{features['quality']}_{features['region_code']}_{features['is_limited_edition']}")
        
        unique_features = len(set(rec_features))
        diversity = unique_features / len(rec_features) if rec_features else 0
        
        print(f"사용자 {user_id}: 다양성 = {diversity:.3f} ({unique_features}/{len(rec_features)})")
        all_recommendations.extend(rec_features)
    
    # 전체 추천의 다양성
    total_unique = len(set(all_recommendations))
    total_diversity = total_unique / len(all_recommendations) if all_recommendations else 0
    print(f"\n전체 추천 다양성: {total_diversity:.3f} ({total_unique}/{len(all_recommendations)})")


def main():
    """메인 검증 함수"""
    print("Sales 기반 추천 시스템 검증 시작...\n")
    
    # 1. Sales 데이터 분석
    sales_df = analyze_sales_features()
    
    # 2. 추천 시스템 로드
    sbf = SalesBasedFiltering('sales_ratings.csv')
    sbf.load_data()
    sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
    
    # 3. 사용자 프로필 검증
    validate_user_profiles(sbf)
    
    # 4. 추천 로직 상세 분석
    test_recommendation_logic(sbf, user_id=1)
    
    # 5. 교차 검증
    cross_validation_test(sbf)
    
    # 6. 다양성 분석
    diversity_analysis(sbf)
    
    print(f"\n=== 검증 완료 ===")


if __name__ == "__main__":
    main()
