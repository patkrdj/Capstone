package com.example.lapisblue.lapisblue.service;

import com.example.lapisblue.lapisblue.domain.Movie;
import com.example.lapisblue.lapisblue.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    @Transactional(readOnly = true)
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Movie findById(Integer id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + id));
    }

    @Transactional(readOnly = true)
    public Movie findWithAllById(Integer id) {
        return movieRepository.findWithAllById(id)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + id));
    }

    @Transactional(readOnly = true)
    public Movie findByTitle(String title) {
        return movieRepository.findByTitle(title)
                .orElseThrow(() -> new IllegalArgumentException("Movie not found: " + title));
    }

    @Transactional(readOnly = true)
    public List<Movie> searchByTitle(String query) {
        return movieRepository.findByTitleContainingIgnoreCase(query);
    }
}

