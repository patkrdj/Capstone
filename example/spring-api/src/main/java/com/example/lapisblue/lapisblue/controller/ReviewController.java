package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.ReviewRequest;
import com.example.lapisblue.lapisblue.Util.JwtUtil;
import com.example.lapisblue.lapisblue.repository.UserRepository;
import com.example.lapisblue.lapisblue.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
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

        reviewService.createOrUpdate(userId, req);
        return ResponseEntity.ok().build();
    }
}


