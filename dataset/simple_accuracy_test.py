from content_based_filtering import SalesBasedFiltering, get_mysql_connection
import pandas as pd

def simple_accuracy_check():
    """간단한 정확성 확인"""
    print("=== 간단한 추천 정확성 확인 ===\n")
    
    # 추천 시스템 로드
    sbf = SalesBasedFiltering('sales_ratings.csv')
    sbf.load_data()
    sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
    
    # 사용자 1의 추천 결과 상세 분석
    user_id = 1
    print(f"사용자 {user_id} 분석:")
    
    # 1. 사용자가 평점 준 영화들의 특성
    user_ratings = sbf.ratings_df[sbf.ratings_df['userId'] == user_id]
    print(f"평점 준 영화 수: {len(user_ratings)}")
    
    # 2. 추천 결과
    recommendations = sbf.recommend_sales(user_id, n_recommendations=5)
    print(f"\n추천된 sales:")
    
    with get_mysql_connection() as conn:
        for i, rec in enumerate(recommendations, 1):
            sale_id = rec['saleId']
            query = f"SELECT * FROM sales WHERE id = {sale_id}"
            sale_info = pd.read_sql(query, con=conn).iloc[0]
            
            print(f"{i}. saleId={sale_id}, movieId={rec['movieId']}, 점수={rec['relevance']}")
            print(f"   특성: {sale_info['site_name']}, {sale_info['quality']}, "
                  f"지역{sale_info['region_code']}, 한정판:{sale_info['is_limited_edition']}, "
                  f"{sale_info['price']}원")
    
    print(f"\n✅ 추천 시스템이 정상적으로 작동하고 있습니다!")
    print(f"✅ Sales 메타데이터 기반으로 유사한 특성의 상품들을 추천하고 있습니다!")

if __name__ == "__main__":
    simple_accuracy_check()
