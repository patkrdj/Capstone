# 🚀 Nginx 사용 예시 - Capstone

이 폴더는 Nginx로 정적 파일만 간단히 서빙하는 예시를 포함합니다. Docker Compose로 실행합니다.

## 📁 파일 구조

```
example/
├── README.md              # 이 파일
├── docker-compose.yml     # Docker Compose 설정 (Nginx만)
├── nginx.conf             # Nginx 설정 (정적 서빙 + SPA 라우팅)
├── index.html             # 메인 웹페이지
└── static/                # 정적 파일 폴더
```

## 🚀 빠른 시작

```bash
cd example
docker-compose up -d
```

### 웹사이트 접속
- 브라우저에서 `http://localhost` 접속

## 📊 Nginx 설정 설명
- **정적 파일 서빙**: HTML, CSS, JS 등 정적 자원 제공
- **SPA 라우팅**: 존재하지 않는 경로는 `index.html`로 처리 (`try_files`)
- **Gzip(필요 시)**: nginx 기본 모듈로 간단 압축 설정 가능

### 설정 파일 위치
- Nginx 설정: `nginx.conf`
- 웹 파일: `index.html`, `static/`

## 🔧 자주 쓰는 명령어
```bash
# 컨테이너 상태
docker-compose ps

# 로그 보기
docker-compose logs -f

# 재시작
docker-compose restart

# 종료
docker-compose down
```

## 🛠️ 커스터마이징
### 포트 변경 (예: 8080 → 80)
```yaml
# docker-compose.yml
services:
  nginx:
    ports:
      - "8080:80"
```

### 정적 파일 추가
- `static/` 폴더에 이미지, CSS, JS 등을 추가하세요.

---

필요하면 API 리버스 프록시 설정을 `nginx.conf`에 다시 추가할 수 있습니다.
