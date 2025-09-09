package com.example.lapisblue.lapisblue.repository;

import com.example.lapisblue.lapisblue.domain.Movie;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    Optional<Movie> findById(Integer id);
    Optional<Movie> findWithAllById(Integer id);
    Optional<Movie> findByTitle(String title);
}
