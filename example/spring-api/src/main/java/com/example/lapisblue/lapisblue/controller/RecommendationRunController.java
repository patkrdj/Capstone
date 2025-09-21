package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.RecommendationRunRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// removed unused imports

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationRunController {
    private final JwtUtil jwtUtil = new JwtUtil(
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    @PostMapping("/run")
    public ResponseEntity<String> run(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody RecommendationRunRequest req
    ) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Unauthorized");
        }
        String token = authorization.substring("Bearer ".length());
        try {
            jwtUtil.parse(token);
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).body("Invalid token");
        }

        int userId = (req != null && req.userId() != null) ? req.userId() : 612;
        int topN = (req != null && req.topN() != null) ? req.topN() : 20;

        // 파이썬 서비스 호출 (컨테이너 간 HTTP)
        String base = System.getenv().getOrDefault("PY_RECO_BASE", "http://py-reco:8000");
        String[] candidates = new String[] {
                base,
                // 윈도우/로컬 환경 대비 로컬호스트 폴백
                "http://localhost:8000",
                "http://127.0.0.1:8000"
        };
        Exception lastEx = null;
        for (String cand : candidates) {
            String url = cand + "/run?userId=" + userId + "&topN=" + topN;
            try {
                java.net.http.HttpClient client = java.net.http.HttpClient.newBuilder()
                        .connectTimeout(java.time.Duration.ofSeconds(3))
                        .build();
                java.net.http.HttpRequest httpReq = java.net.http.HttpRequest.newBuilder()
                        .uri(java.net.URI.create(url))
                        .GET()
                        .build();
                java.net.http.HttpResponse<String> resp = client.send(httpReq, java.net.http.HttpResponse.BodyHandlers.ofString());
                if (resp.statusCode() == 200) {
                    return ResponseEntity.ok(resp.body());
                }
                lastEx = new RuntimeException("py-reco error: " + resp.statusCode() + "\n" + resp.body());
            } catch (Exception e) {
                lastEx = e;
            }
        }
        return ResponseEntity.status(500).body("HTTP call error: " + (lastEx != null ? lastEx.getMessage() : "unknown"));
    }
}


