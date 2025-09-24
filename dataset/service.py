from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
import uvicorn
from typing import Optional

from matrix_factorization_recommender import get_user_recommendations
from content_based_filtering import SalesBasedFiltering
from bluray_rating_converter import BlurayRatingConverter
import pandas as pd
import os

app = FastAPI()


@app.get("/run")
def run(userId: int = Query(..., alias="userId"), topN: int = Query(20, alias="topN")):
    try:
        # 1) 영화 추천 (SVD)
        recommendations = get_user_recommendations(
            userId,
            n_recommendations=100,
            random_seed=293,
            diversity_factor=0.3,
            include_personalized_score=True,
            verbose=False,
        ) or []

        # 2) 블루레이 추천 (콘텐츠 기반)
        bluray_results = []
        disable_sbf = os.getenv("DISABLE_SBF", "false").lower() in ("1", "true", "yes")
        if not disable_sbf:
            try:
                sbf = SalesBasedFiltering()
                sbf.load_data()
                sbf.create_sales_feature_matrix(min_df=2, use_log_tf=True)
                # 충분히 많이 뽑아두고, 사후 필터링(이미 평가한 영화 제외) 후 최종 topN으로 자르기
                candidate_top_n = max(topN * 5, 100)
                bluray_results = sbf.find_best_sales_for_movies(
                    recommendations,
                    user_id=userId,
                    top_n=candidate_top_n
                )
            except Exception as e:
                # 윈도우/외부 환경에서 DB 연결 실패 등은 무시하고 영화 추천만 반환
                bluray_results = []

        # numpy 타입을 Python 기본 타입으로 변환하는 헬퍼 함수
        def convert_numpy_types(obj):
            import numpy as np
            if isinstance(obj, (np.integer, np.floating)):
                return obj.item()
            elif isinstance(obj, np.ndarray):
                return obj.tolist()
            return obj

        # Filter out already-rated movies (live from ratings.csv)
        try:
            dataset_dir = os.getenv("APP_DATASET_DIR") or "/app/dataset"
            ml_dir = os.path.join(dataset_dir, "ml-latest-small")
            ratings_csv_path = os.path.join(ml_dir, "ratings.csv")
            personal_csv_path = os.path.join(ml_dir, "personal_ratings.csv")

            frames = []
            if os.path.exists(ratings_csv_path):
                frames.append(pd.read_csv(ratings_csv_path, usecols=["userId", "movieId"]))
            if os.path.exists(personal_csv_path):
                # 개인 평점도 제외 집합에 포함
                try:
                    frames.append(pd.read_csv(personal_csv_path, usecols=["userId", "movieId"]))
                except Exception:
                    pass

            rated_df = pd.concat(frames, ignore_index=True) if frames else pd.DataFrame(columns=["userId","movieId"])
            # 안전 캐스팅 및 NA 제거
            rated_df = rated_df.dropna(subset=["userId","movieId"])
            rated_df["userId"] = rated_df["userId"].astype(int)
            rated_df["movieId"] = rated_df["movieId"].astype(int)
            rated_movie_ids = set(rated_df.loc[rated_df["userId"] == int(userId), "movieId"].tolist())
        except Exception:
            rated_movie_ids = set()

        filtered = []
        for r in (bluray_results or []):
            # Support both keys: movie_id or movieId
            mid = convert_numpy_types(r.get("movie_id") if r.get("movie_id") is not None else r.get("movieId"))
            if mid is None:
                continue
            try:
                mid_int = int(mid)
            except Exception:
                continue
            if mid_int in rated_movie_ids:
                continue
            filtered.append({
                "movieId": mid_int,
                "movieTitle": r.get("movie_title"),
                "saleId": convert_numpy_types((r.get("best_sale") or {}).get("id")) if r.get("best_sale") else None,
                "similarityScore": convert_numpy_types(r.get("similarity_score", 0.0)),
                "reason": r.get("reason", "")
            })

        # 최종 응답 개수는 항상 topN을 넘지 않도록 슬라이싱
        payload = {"userId": userId, "results": filtered[:topN]}
        return JSONResponse(content=payload)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


@app.post("/append-rating")
def append_rating(userId: int = Query(..., alias="userId"), salesId: int = Query(..., alias="salesId")):
    try:
        # Determine dataset dir for ratings.csv
        dataset_dir = os.getenv("APP_DATASET_DIR") or "/app/dataset"
        ratings_csv_path = os.path.join(dataset_dir, "ml-latest-small", "ratings.csv")

        converter = BlurayRatingConverter(verbose=False)
        result = converter.convert_review_to_movie_rating(userId, salesId)
        if not result:
            return JSONResponse(status_code=404, content={"error": "conversion_failed_or_not_found"})

        movie_id = int(result.get("movie_id"))
        converted_rating = float(result.get("converted_movie_rating"))
        ts = int(__import__("time").time())

        # Ensure directory exists
        os.makedirs(os.path.dirname(ratings_csv_path), exist_ok=True)

        # Append (or create with header)
        if not os.path.exists(ratings_csv_path):
            df = pd.DataFrame([
                {"userId": userId, "movieId": movie_id, "rating": converted_rating, "timestamp": ts}
            ])
            df.to_csv(ratings_csv_path, index=False)
            created = True
        else:
            try:
                df_existing = pd.read_csv(ratings_csv_path)
            except Exception:
                df_existing = pd.DataFrame(columns=["userId","movieId","rating","timestamp"])
            df_append = pd.DataFrame([
                {"userId": userId, "movieId": movie_id, "rating": converted_rating, "timestamp": ts}
            ])
            df_out = pd.concat([df_existing, df_append], ignore_index=True)
            df_out.to_csv(ratings_csv_path, index=False)
            created = False

        return JSONResponse(content={
            "status": "ok",
            "created": created,
            "ratings_csv_path": ratings_csv_path,
            "userId": userId,
            "movieId": movie_id,
            "rating": converted_rating,
            "timestamp": ts
        })
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


