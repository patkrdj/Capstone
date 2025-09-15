## API Usage (JavaScript)

### Base
- **Base URL**: same-origin behind Nginx at `/api` (e.g., `/api/login`). If calling the Spring app directly: `http://localhost:8080/api/...`.
- **Auth**: Bearer JWT in `Authorization` header. `me`는 토큰 필요, `movies`는 공개.

### Small helper
```javascript
const BASE = '/api';

async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  const maybeJson = text ? (() => { try { return JSON.parse(text); } catch { return text; } })() : null;
  if (!res.ok) {
    const message = typeof maybeJson === 'string' ? maybeJson : (maybeJson?.message || res.statusText);
    throw new Error(`${res.status} ${message}`);
  }
  return maybeJson;
}
```

### 1) Login
- POST `/api/login`
- Body: `{ usernameOrEmail: string, password: string }`
- 200: `{ accessToken: string }` / 401: empty body

```javascript
async function login(usernameOrEmail, password) {
  const data = await apiFetch('/login', {
    method: 'POST',
    body: { usernameOrEmail, password }
  });
  return data.accessToken; // JWT
}
```

### 2) Signup
- POST `/api/signup`
- Body: `{ username: string, email: string, password: string }`
- 200: "회원가입 성공" (text) / 400: error message (text)

```javascript
async function signup({ username, email, password }) {
  const result = await apiFetch('/signup', {
    method: 'POST',
    body: { username, email, password }
  });
  return result; // string
}
```

### 3) Me
- GET `/api/me`
- Header: `Authorization: Bearer <token>`
- 200: `{ usernameOrEmail, username, email, role }`
- 401: "Missing Authorization header" | "Invalid token" | "User not found"

```javascript
async function getMe(token) {
  return await apiFetch('/me', { token });
}
```

### 4) Movies
DTO shape
```ts
type MovieResponse = {
  id: number;
  title: string;
  director: string;
  releaseDate: string;           // ISO LocalDateTime
  productionCompany: string;
  distributionCompany: string;
  runningTime: string;           // ISO LocalTime (e.g., "01:45:00")
};
```

- List: GET `/api/movies` → `MovieResponse[]`
```javascript
async function listMovies() {
  return await apiFetch('/movies');
}
```

- Detail: GET `/api/movies/{id}` → `MovieResponse` or 404
```javascript
async function getMovie(id) {
  return await apiFetch(`/movies/${id}`);
}
```

- Search: GET `/api/movies/search?query=...` → `MovieResponse[]`
```javascript
async function searchMovies(query) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/movies/search?${qs}`);
}
```

### Example flow
```javascript
(async () => {
  const token = await login('alice@example.com', 'secret123');
  const me = await getMe(token);
  const movies = await listMovies();
})();
```

### Notes
- Cross-origin에서 직접 호출 시 `BASE`를 `http://localhost:8080/api`처럼 API 오리진으로 설정.
- 시간 파싱 예시:
```javascript
const runMinutes = (t) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
```
- 토큰은 메모리 또는 `localStorage` 등에 보관 후 필요한 요청에만 첨부.

## Sales

### 엔드포인트
- GET `/api/sales?limit=<number>` → 판매 목록
- GET `/api/sales/{id}` → 판매 단건
- GET `/api/sales/search?query=<movieTitle>` → 영화 제목으로 판매 검색

### 응답 타입 (SalesResponse)
```ts
type SalesResponse = {
  id: number;
  movieId: number | null;
  siteName: string | null;          // yes24 | aladin | kyobo
  siteUrl: string | null;           // 외부 구매 링크
  price: number | null;             // 원화 정수
  quality: string | null;           // 한 글자 등급(ex. A/B 등)
  regionCode: string | null;        // 리전 코드(단일 문자)
  isLimitedEdition: boolean | null; // 한정판 여부
  imageLink: string | null;         // 상품 이미지 URL
  blurayTitle: string | null;       // 판매 타이틀(노출용)
};
```

### 사용 예시
```javascript
// 목록
async function listSales(limit) {
  const qs = limit ? `?limit=${encodeURIComponent(limit)}` : '';
  return await apiFetch(`/sales${qs}`);
}

// 단건
async function getSale(id) {
  return await apiFetch(`/sales/${id}`);
}

// 검색 (영화 제목 기준 부분일치)
async function searchSalesByMovieTitle(query) {
  const qs = new URLSearchParams({ query }).toString();
  return await apiFetch(`/sales/search?${qs}`);
}
```

### 비고
- 검색은 영화 제목(`movie.title`)에 대해 대소문자 무시 부분일치로 동작합니다.
- 목록은 `limit`로 상한을 줄 수 있습니다.
- 리스트 UI 노출 시에는 `blurayTitle`이 있으면 이를 우선적으로 제목으로 사용하세요. 이미지가 있으면 `imageLink`를 썸네일로 사용할 수 있습니다.


## Recommendations

### 개요
- 추천은 DB 저장 없이 실시간으로 생성한 결과를 반환합니다.
- 호출 흐름: 클라이언트 → `POST /api/recommendations/run` (Spring) → Spring이 파이썬 서비스(py-reco)의 `GET /run?userId&topN`을 호출 → JSON 결과를 그대로 반환.

### 엔드포인트 (Spring)
- POST `/api/recommendations/run`
  - Header: `Authorization: Bearer <token>`
  - Body: `{ userId: number, topN?: number }` (topN 기본값 20)
  - 200: 아래 JSON 페이로드
  - 401: 인증 실패
  - 500: 내부 오류(파이썬 서비스 오류 포함)

응답 스키마
```ts
type RecommendationRunResponse = {
  userId: number;
  results: Array<{
    movieId: number | null;
    movieTitle: string | null;
    saleId: number | null;
    similarityScore: number | null;
    reason: string;                // 예: "4K, Blu-ray, 3D, 35,000원"
  }>;
};
```

### 파이썬 서비스(py-reco)
- GET `/run?userId=<id>&topN=<n>`
  - 내부에서 `recommender.py`의 JSON 출력 루틴을 재사용해 안정적인 JSON을 반환합니다.
  - 직접 호출이 필요한 경우(로컬 테스트): `http://<py-reco-host>:8000/run?userId=612&topN=5`

### 사용 예시 (프런트)
```javascript
async function runRecommendations(userId, token, topN = 5) {
  return await apiFetch('/recommendations/run', {
    method: 'POST',
    token,
    body: { userId, topN }
  });
}

// 응답 처리 예시
(async () => {
  const token = localStorage.getItem('accessToken');
  const userId = Number(localStorage.getItem('userId')) || 612;
  const payload = await runRecommendations(userId, token, 5);
  const list = payload.results || [];
  // list[0]?.reason, list[0]?.saleId 등으로 UI 업데이트
})();
```

### 주의사항
- 인증 프록시(Nginx) 사용 시 `Authorization` 헤더 전달 설정 필요.
- Docker 구성에서는 Spring이 `PY_RECO_BASE`를 통해 py-reco를 호출합니다(기본 `http://py-reco:8000`).


