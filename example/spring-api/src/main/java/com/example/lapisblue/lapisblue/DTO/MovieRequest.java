package com.example.lapisblue.lapisblue.DTO;

import com.example.lapisblue.lapisblue.domain.Movie;

import java.time.LocalDateTime;
import java.time.LocalTime;

public record MovieRequest(
        Integer id,
        String title,
        String director,
        LocalDateTime releaseDate,
        String productionCompany,
        String distributionCompany,
        LocalTime runningTime
) {
    public static MovieRequest from(Movie movie) {
        return new MovieRequest(
                movie.getId(),
                movie.getTitle(),
                movie.getDirector(),
                movie.getReleaseDate(),
                movie.getProductionCompany(),
                movie.getDistributionCompany(),
                movie.getRunningTime()
        );
    }
}
