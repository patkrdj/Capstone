package com.example.demo.web;

import com.example.demo.security.JwtUtil;
import com.example.demo.user.UserStore;
import com.example.demo.web.dto.LoginRequest;
import com.example.demo.web.dto.TokenResponse;
import com.example.demo.web.dto.UserInfo;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {

    private final JwtUtil jwtUtil;
    private final UserStore userStore;

    public AuthController(
            UserStore userStore,
            @Value("${app.jwt.secret:VGhpcy1pcy1hLXN1cGVyLXNlY3JldC1zZWVkLWF0LWxlYXN0LTMyLWNoYXJzLWxvbmc=}") String base64Secret,
            @Value("${app.jwt.ttlSeconds:900}") long ttlSeconds
    ) {
        this.userStore = userStore;
        this.jwtUtil = new JwtUtil(base64Secret, ttlSeconds);
    }

    @PostMapping(path = "/signup", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> signup(@RequestBody LoginRequest req) {
        if (req.getUsername() == null || req.getUsername().isBlank() || req.getPassword() == null || req.getPassword().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("error", "EMPTY_FIELDS"));
        }
        if (!req.getUsername().matches("^[a-zA-Z0-9_-]{3,20}$")) {
            return ResponseEntity.badRequest().body(Map.of("error", "INVALID_USERNAME"));
        }
        boolean ok = userStore.create(req.getUsername(), req.getPassword());
        if (!ok) return ResponseEntity.status(409).body(Map.of("error", "ALREADY_EXISTS"));
        return ResponseEntity.ok(Map.of("success", true));
    }

    @PostMapping(path = "/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest req) {
        if (!userStore.verify(req.getUsername(), req.getPassword())) {
            return ResponseEntity.status(401).body(new TokenResponse(null, "INVALID_CREDENTIALS"));
        }
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", "USER");
        String token = jwtUtil.generateToken(req.getUsername(), claims);
        return ResponseEntity.ok(new TokenResponse(token, null));
    }

    @GetMapping(path = "/me")
    public ResponseEntity<UserInfo> me(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorization) {
        if (authorization == null || !authorization.startsWith("Bearer ")) {
            return ResponseEntity.status(401).build();
        }
        String token = authorization.substring(7);
        try {
            Map<String, Object> claims = jwtUtil.validateAndGetClaims(token);
            String username = (String) claims.get("sub");
            String role = (String) claims.getOrDefault("role", "USER");
            return ResponseEntity.ok(new UserInfo(username, role));
        } catch (Exception e) {
            return ResponseEntity.status(401).build();
        }
    }
}

