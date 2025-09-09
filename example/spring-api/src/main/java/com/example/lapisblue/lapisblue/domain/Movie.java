package com.example.lapisblue.lapisblue.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "movies")
@Getter
@Setter
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(length = 255)
    private String director;

    @Column(name = "release_date")
    private LocalDateTime releaseDate;

    @Column(name = "production_company", length = 255)
    private String productionCompany;

    @Column(name = "distribution_company", length = 255)
    private String distributionCompany;

    @Column(name = "running_time")
    private LocalTime runningTime;
}

