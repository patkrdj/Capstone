from matrix_factorization_recommender import get_user_recommendations, debug_user_preferences
import time

def main():
    """개인화가 강화된 SVDRecommender 사용 예제"""
    print("개인화가 강화된 SVDRecommender를 활용한 영화 추천 예제")
    print("="*90)
    
    # 테스트할 사용자 ID들
    user_id = 612
    
    # 먼저 사용자 선호도 분석
    print("\n" + "="*50)
    debug_user_preferences(user_id)
    print("="*50)
    
    print(f"\n사용자 {user_id}의 개인화된 추천 영화:")
    
    try:
        # 속도 측정 시작
        print(f"\n⏱️  추천 시스템 성능 측정:")
        print("-" * 50)
        
        total_start_time = time.time()
        
        # 개인화 점수를 포함한 추천 영화 가져오기
        print("추천 계산 중...")
        recommendation_start = time.time()
        
        recommendations = get_user_recommendations(
            user_id, 
            n_recommendations=100, 
            random_seed=172,
            diversity_factor=0.3,  # 30% 다양성 적용
            include_personalized_score=True,
            verbose=True  # 상세 시간 측정 활성화
        )
        
        recommendation_time = time.time() - recommendation_start
        total_time = time.time() - total_start_time
        
        # 성능 결과 출력
        print(f"\n📈 성능 측정 결과:")
        print(f"  총 추천 시간: {total_time:.3f}초")
        print(f"  추천 계산 시간: {recommendation_time:.3f}초")
        print(f"  추천 영화 수: {len(recommendations) if recommendations else 0}개")
        
        if recommendations and len(recommendations) > 0:
            print(f"  영화당 평균 시간: {recommendation_time/len(recommendations)*1000:.2f}ms")
        
        # 성능 등급 평가
        if recommendation_time < 1.0:
            performance_grade = "⚡ 매우 빠름"
        elif recommendation_time < 3.0:
            performance_grade = "🚀 빠름"
        elif recommendation_time < 5.0:
            performance_grade = "✅ 보통"
        elif recommendation_time < 10.0:
            performance_grade = "⚠️  느림"
        else:
            performance_grade = "🐌 매우 느림"
        
        print(f"  성능 등급: {performance_grade}")
        print("-" * 50)
        
        if recommendations:
            print(f"\n📋 추천 결과 (상위 20개):")
            print(f"{'순위':<4} {'영화 ID':<8} {'예상 평점':<8} {'개인화 점수':<10} {'평균 평점':<8} {'영화 제목':<35}")
            print("-" * 100)
            
            # 상위 20개만 출력 (너무 많으면 화면이 지저분함)
            display_count = min(20, len(recommendations))
            for i, (movie_id, title, predicted_rating, personalized_score, avg_rating) in enumerate(recommendations[:display_count], 1):
                # 제목이 너무 길면 줄임
                display_title = title[:32] + "..." if len(title) > 35 else title
                print(f"{i:<4} {movie_id:<8} {predicted_rating:<8.2f} {personalized_score:<10.2f} {avg_rating:<8.2f} {display_title:<35}")
                
            if len(recommendations) > 20:
                print(f"\n... 총 {len(recommendations)}개 중 상위 20개만 표시됨")
                
        else:
            print("추천할 영화가 없습니다.")
            
    except Exception as e:
        print(f"오류 발생: {e}")
    
    print()


if __name__ == "__main__":
    main()
