package com.example.lapisblue.lapisblue.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class Test {

    @GetMapping("/")
    public String root() {
        return "애플리케이션이 실행 중입니다!";
    }

    @GetMapping("/api/test")
    public String test() {
        return "테스트 성공!";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    @GetMapping("/api/status")
    public String status() {
        return "Spring Boot is running!";
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @GetMapping("/api/db-test")
    public String dbTest() {
        return "Database test endpoint - Spring Boot is running";
    }
}

