import pymysql
import pandas as pd
import random
import time
import os


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


def generate_sales_ratings(output_file='sales_ratings.csv', num_users=10, items_per_user=30):
	"""
	Sales 테이블에서 임의로 블루레이를 추출하여 5.0 평점을 주는 CSV 파일 생성
	
	Args:
		output_file: 출력할 CSV 파일 경로
		num_users: 생성할 사용자 수
		items_per_user: 사용자당 평점을 줄 아이템 수
	"""
	print("Sales 테이블에서 데이터를 로드하는 중...")
	
	# Sales 테이블에서 movie_id가 있는 항목들 추출
	with get_mysql_connection() as conn:
		query = """
		SELECT DISTINCT movie_id 
		FROM sales 
		WHERE movie_id IS NOT NULL
		"""
		df = pd.read_sql(query, con=conn)
	
	if df.empty:
		raise RuntimeError("Sales 테이블에서 movie_id를 찾을 수 없습니다.")
	
	movie_ids = df['movie_id'].dropna().astype(int).tolist()
	print(f"사용 가능한 movie_id 수: {len(movie_ids)}")
	
	# 각 사용자별로 임의의 영화에 5.0 평점 부여
	ratings_data = []
	base_timestamp = int(time.time())
	
	for user_id in range(1, num_users + 1):
		# 사용자당 아이템 수가 전체 영화 수보다 많으면 조정
		actual_items = min(items_per_user, len(movie_ids))
		
		# 중복 없이 임의 선택
		selected_movies = random.sample(movie_ids, actual_items)
		
		for idx, movie_id in enumerate(selected_movies):
			ratings_data.append({
				'userId': user_id,
				'movieId': movie_id,
				'rating': 5.0,
				'timestamp': base_timestamp + user_id * 1000 + idx
			})
		
		print(f"사용자 {user_id}: {len(selected_movies)}개 영화에 평점 부여")
	
	# DataFrame 생성 및 CSV 저장
	ratings_df = pd.DataFrame(ratings_data)
	
	# 출력 디렉토리 생성 (필요한 경우)
	output_dir = os.path.dirname(output_file)
	if output_dir and not os.path.exists(output_dir):
		os.makedirs(output_dir, exist_ok=True)
	
	ratings_df.to_csv(output_file, index=False)
	
	print(f"\n=== 평점 데이터 생성 완료 ===")
	print(f"파일: {output_file}")
	print(f"총 평점 수: {len(ratings_data)}")
	print(f"사용자 수: {num_users}")
	print(f"사용자당 평균 평점 수: {len(ratings_data) / num_users:.1f}")
	print(f"고유 영화 수: {ratings_df['movieId'].nunique()}")
	
	# 샘플 데이터 출력
	print(f"\n샘플 데이터 (처음 10개):")
	print(ratings_df.head(10))
	
	return output_file


def main():
	"""메인 실행 함수"""
	try:
		# 평점 데이터 생성
		output_file = generate_sales_ratings(
			output_file='sales_ratings.csv',
			num_users=20,  # 20명의 사용자
			items_per_user=30  # 사용자당 30개 아이템
		)
		
		print(f"\n평점 CSV 파일이 성공적으로 생성되었습니다: {output_file}")
		
	except Exception as e:
		print(f"오류 발생: {e}")


if __name__ == "__main__":
	main()
