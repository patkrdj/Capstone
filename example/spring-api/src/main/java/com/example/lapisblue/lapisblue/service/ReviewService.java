package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.DTO.ReviewRequest;
import com.example.lapisblue.lapisblue.domain.Review;
import com.example.lapisblue.lapisblue.domain.Sales;
import com.example.lapisblue.lapisblue.repository.ReviewRepository;
import com.example.lapisblue.lapisblue.repository.SalesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final SalesRepository salesRepository;

    @Transactional
    public void createOrUpdate(Integer userId, ReviewRequest req) {
        if (req == null || req.salesId() == null || req.rating() == null) {
            throw new IllegalArgumentException("Invalid review request");
        }
        // rating 범위 검증 (예: 0.0 ~ 5.0). 필요에 따라 조정하세요.
        if (req.rating() < 0.0f || req.rating() > 5.0f) {
            throw new IllegalArgumentException("Invalid rating value");
        }

        Sales sales = salesRepository.findById(req.salesId())
                .orElseThrow(() -> new IllegalArgumentException("Sales not found: " + req.salesId()));

        Review.ReviewId id = new Review.ReviewId(userId, req.salesId());
        Review review = reviewRepository.findById(id).orElseGet(() -> {
            Review r = new Review();
            r.setId(id);
            r.setSales(sales);
            return r;
        });
        review.setRating(req.rating());
        review.setReviewComment(req.reviewComment());
        reviewRepository.save(review);
    }

    @Transactional(readOnly = true)
    public List<Review> findBySalesId(Integer salesId) {
        return reviewRepository.findBySales_Id(salesId);
    }

    @Transactional(readOnly = true)
    public List<Review> findByUserId(Integer userId) {
        return reviewRepository.findById_UserId(userId);
    }
}


