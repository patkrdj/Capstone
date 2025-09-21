from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
import uvicorn
from typing import Optional

from matrix_factorization_recommender import get_user_recommendations
from content_based_filtering import SalesBasedFiltering
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
                bluray_results = sbf.find_best_sales_for_movies(recommendations, user_id=userId, top_n=topN)
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

        payload = {
            "userId": userId,
            "results": [
                {
                    "movieId": convert_numpy_types(r.get("movie_id")),
                    "movieTitle": r.get("movie_title"),
                    "saleId": convert_numpy_types((r.get("best_sale") or {}).get("id")) if r.get("best_sale") else None,
                    "similarityScore": convert_numpy_types(r.get("similarity_score", 0.0)),
                    "reason": r.get("reason", "")
                }
                for r in (bluray_results or [])
            ],
        }
        return JSONResponse(content=payload)
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


