package com.example.lapisblue.lapisblue.DTO;

public record ReviewRequest(
        Integer userId,
        Integer salesId,
        Integer rating,
        String reviewComment
) {}


