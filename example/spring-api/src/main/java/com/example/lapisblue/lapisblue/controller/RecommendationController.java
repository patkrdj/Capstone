package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.RecommendationImportRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationController {
    private final RecommendationService recommendationService;
    private final com.example.lapisblue.lapisblue.repository.RecommendationRepository recommendationRepository;
    private final JwtUtil jwtUtil = new JwtUtil(
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    @PostMapping("/import")
    public ResponseEntity<Void> importResults(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody RecommendationImportRequest req
    ) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring("Bearer ".length());
        try {
            jwtUtil.parse(token);
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).build();
        }

        recommendationService.importResults(req);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<java.util.List<java.util.Map<String, Object>>> listByUser(
            @RequestParam Integer userId
    ) {
        var list = recommendationRepository.findById_UserId(userId);
        var result = new java.util.ArrayList<java.util.Map<String, Object>>();
        for (var r : list) {
            var m = new java.util.HashMap<String, Object>();
            if (r.getId() != null) {
                m.put("userId", r.getId().getUserId());
                m.put("movieId", r.getId().getMovieId());
            }
            m.put("saleId", r.getSaleId());
            m.put("similarity", r.getSimilarity());
            m.put("reason", r.getReason());
            result.add(m);
        }
        return ResponseEntity.ok(result);
    }
}


