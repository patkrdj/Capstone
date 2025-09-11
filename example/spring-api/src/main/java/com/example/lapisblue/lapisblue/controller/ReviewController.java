package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.ReviewRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final JdbcTemplate jdbcTemplate;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil = new JwtUtil(
            "VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=",
            900
    );

    @PostMapping
    public ResponseEntity<Void> createOrUpdate(
            @RequestHeader(value = "Authorization", required = false) String authorization,
            @RequestBody ReviewRequest req
    ) {
        if (req == null || req.salesId() == null || req.rating() == null) {
            return ResponseEntity.badRequest().build();
        }
        // -1,0,1만 허용
        if (!(req.rating() == -1 || req.rating() == 0 || req.rating() == 1)) {
            return ResponseEntity.badRequest().build();
        }
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring("Bearer ".length());
        String subject;
        try {
            var jws = jwtUtil.parse(token);
            subject = jws.getBody().getSubject();
        } catch (io.jsonwebtoken.JwtException e) {
            return ResponseEntity.status(401).build();
        }
        var userOpt = userRepository.findByUsername(subject)
                .or(() -> userRepository.findByEmail(subject));
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(401).build();
        }
        int userId = userOpt.get().getId();

        String sql = "INSERT INTO reviews (user_id, sales_id, rating, review_comment) VALUES (?,?,?,?) " +
                "ON DUPLICATE KEY UPDATE rating=VALUES(rating), review_comment=VALUES(review_comment)";
        jdbcTemplate.update(sql, userId, req.salesId(), req.rating(), req.reviewComment());
        return ResponseEntity.ok().build();
    }
}


