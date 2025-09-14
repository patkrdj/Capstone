# 데이터베이스 기반 블루레이 평가 시스템 (Database-based Blu-ray Rating System)

데이터베이스의 Movies 테이블과 Sales 테이블을 활용하여 블루레이 평가를 계산하는 시스템입니다.

## 🎯 개요

이 시스템은 데이터베이스의 실제 영화 정보(`movies` 테이블)와 블루레이 판매 정보(`sales` 테이블)를 종합하여, 각 블루레이 상품에 대한 평가를 계산합니다. 기본 영화 평가는 `ratings.csv` 파일에서 가져오며, 영화의 특성(감독, 연도, 러닝타임 등)과 블루레이의 특성(화질, 가격, 리미티드 에디션 등)을 모두 고려합니다.

### 📊 데이터 소스
- **Movies 테이블**: 영화 기본 정보 (제목, 감독, 출시일, 러닝타임 등)
- **Sales 테이블**: 블루레이 판매 정보 (가격, 화질, 리미티드 에디션, 사이트 등)
- **ratings.csv**: 영화 평가 데이터 (MovieLens 데이터셋)

## 📊 평가 수식

```
y^ = α + β*x + γ1*Director + γ2*Year + γ3*Quality + γ4*Price + γ5*LimitedEdition + γ6*RegionCode + γ7*Site + ...
```

여기서:
- `y^`: 예측된 블루레이 평가 (0-5점)
- `α`: 절편 (기본값: 0.3)
- `β`: 기본 영화 평가 가중치 (기본값: 0.6)
- `γi`: 각 특성별 가중치

## 🎬 주요 특성

### Movies 테이블 특성
- **감독 (Director)**: 유명 감독 작품 보너스
- **출시년도 (Release Date)**: 최신 영화일수록 높은 점수
- **러닝타임 (Running Time)**: 적절한 길이(90-150분) 선호
- **제작사/배급사**: 메이저 스튜디오 보너스

### movies.csv 특성 (MovieLens)
- **장르 (Genres)**: 각 장르별 블루레이 선호도 적용
  - Sci-Fi: 0.20 (최고)
  - Horror: 0.18
  - Action: 0.15
  - Fantasy: 0.14
  - Thriller: 0.12
  - Animation: 0.12
  - 기타 장르들...

### Sales 테이블 특성
- **화질 (Quality)**: 4K > HD > SD 순으로 평가
- **가격 (Price)**: 높은 가격은 평가 하락 요인
- **리미티드 에디션**: 한정판 여부에 따른 보너스
- **지역 코드**: 국내/수입 구분에 따른 점수
- **판매 사이트**: 사이트별 신뢰도 반영

## 🚀 사용 방법

### 1. 특정 블루레이 평가

```python
from bluray_rating_converter import BlurayRatingConverter

# 변환기 초기화
converter = BlurayRatingConverter()

# Sales ID로 특정 블루레이 평가
result = converter.calculate_bluray_rating_for_sales(sales_id=1)
print(f"평가: {result['bluray_rating']}/5.0")
```

### 2. 영화 검색 및 평가

```python
# 영화 제목으로 검색하여 관련 블루레이 평가
results = converter.search_and_rate_bluray("어벤져스", limit=5)
for result in results:
    print(f"{result['title']}: {result['bluray_rating']}/5.0")
```

### 3. 상위 평가 블루레이 조회

```python
# 상위 평가 블루레이 목록
top_blurays = converter.get_top_rated_blurays(limit=10)
for bluray in top_blurays:
    print(f"{bluray['title']}: {bluray['bluray_rating']}/5.0")
```

### 4. 가중치 조정

```python
# 사용자 정의 가중치 적용
custom_weights = {
    'quality_4k': 0.6,        # 4K 중요도 증가
    'limited_edition': 0.3,   # 리미티드 에디션 중요도 증가
    'price_factor': -0.0001   # 가격 민감도 조정
}

converter.update_weights(custom_weights)
```

## 📁 파일 구조

```
dataset/
├── bluray_rating_converter.py     # 메인 변환기 클래스 (데이터베이스 기반)
├── generate_bluray_ratings.py     # 데이터베이스 블루레이 평가 생성 스크립트
└── BLURAY_CONVERTER_README.md     # 이 파일
```

## 🎮 실행 예시

### 기본 데모 실행
```bash
python bluray_rating_converter.py
```

### 전체 블루레이 평가 생성
```bash
python generate_bluray_ratings.py
```

### 제한된 수량으로 평가 생성
```bash
python generate_bluray_ratings.py 100  # 100개만 처리
```

### 검색 모드
```bash
python generate_bluray_ratings.py search
```

### 데모 모드
```bash
python generate_bluray_ratings.py demo
```

## ⚙️ 가중치 설정

### 기본 가중치
```python
weights = {
    'base_rating': 0.6,         # 기본 영화 평가 가중치
    'director_factor': 0.15,    # 감독 요인
    'year_factor': 0.003,       # 연도별 가중치
    'running_time_factor': 0.001, # 러닝타임 요인
    'quality_4k': 0.4,          # 4K 화질 가중치
    'quality_hd': 0.2,          # HD 화질 가중치
    'quality_sd': 0.0,          # SD 화질 가중치
    'price_factor': -0.00008,   # 가격 요인 (음수)
    'limited_edition': 0.25,    # 리미티드 에디션
    'region_code_factor': 0.05, # 지역 코드 요인
    'site_preference': {        # 사이트별 신뢰도
        'yes24': 0.05,
        'aladin': 0.03,
        'kyobo': 0.04
    }
}
```

### 가중치 조정 가이드

1. **화질 중시형**: `quality_4k`, `quality_hd` 가중치 증가
2. **가격 민감형**: `price_factor` 음수 값 증가
3. **감독 중시형**: `director_factor` 가중치 증가
4. **원본 충실형**: `base_rating` 가중치 증가
5. **한정판 선호형**: `limited_edition` 가중치 증가

## 📈 출력 결과

생성되는 CSV 파일은 다음 컬럼을 포함합니다:

```csv
sales_id,movie_id,title,director,genres,base_rating,bluray_rating,price,quality,is_limited_edition,site_name,region_code,bluray_title
1,42,"Avengers: Endgame","Anthony Russo","['Action','Adventure','Sci-Fi']",4.2,4.85,35000,"4",True,"yes24",1,"어벤져스: 엔드게임 4K UHD 스틸북"
```

### 주요 컬럼 설명
- `sales_id`: Sales 테이블의 고유 ID
- `movie_id`: Movies 테이블의 영화 ID
- `genres`: 영화 장르 리스트 (movies.csv 기반)
- `base_rating`: 기본 영화 평가 (ratings.csv 기반)
- `bluray_rating`: 계산된 블루레이 평가 (0-5점)
- `quality`: 화질 코드 (4=4K, H=HD, S=SD 등)
- `is_limited_edition`: 리미티드 에디션 여부
- `region_code`: 지역 코드 (1=국내, 3=수입 등)

## 🔍 검증 및 분석

변환 결과는 다음과 같이 분석됩니다:

- **평가 분포 비교**: 원본 vs 블루레이 평가 분포
- **통계 정보**: 평균 평가, 4K/HDR 비율, 가격 분포
- **상위 평가**: 높은 블루레이 평가를 받은 영화들
- **특성별 영향도**: 각 특성이 평가에 미치는 영향

## 🎯 활용 방안

1. **추천 시스템**: 블루레이 구매 추천
2. **가격 책정**: 블루레이 적정 가격 산정
3. **재고 관리**: 인기 예상 블루레이 파악
4. **마케팅**: 타겟 고객별 맞춤 추천

## 🔧 커스터마이징

### 새로운 특성 추가
```python
def add_custom_feature(self, feature_name, weight):
    self.weights[feature_name] = weight
```

### 장르 선호도 수정
```python
self.genre_preferences['NewGenre'] = 0.15
```

### 블루레이 특성 확장
```python
def generate_bluray_features(self, movie_row):
    # 새로운 특성 추가
    features['new_feature'] = calculate_new_feature()
    return features
```

## 📝 주의사항

1. 블루레이 특성은 현재 확률적으로 생성됩니다
2. 실제 사용시에는 외부 데이터베이스와 연동 필요
3. 가중치는 도메인 지식에 따라 조정 권장
4. 결과 검증을 위한 실제 사용자 평가 수집 필요

## 🚀 향후 개선 방향

- [ ] 실제 블루레이 데이터베이스 연동
- [ ] 머신러닝 기반 가중치 자동 최적화
- [ ] 사용자별 개인화 가중치
- [ ] 실시간 시장 데이터 반영
- [ ] 웹 인터페이스 개발
