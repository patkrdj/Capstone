package com.example.lapisblue.lapisblue.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class Test {

    @GetMapping("/api/test")
    public String test() {
        return "테스트 성공!";
    }
}

