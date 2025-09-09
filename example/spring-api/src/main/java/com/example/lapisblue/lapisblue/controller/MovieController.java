package com.example.lapisblue.lapisblue.controller;

import com.example.lapisblue.lapisblue.DTO.MovieResponse;
import com.example.lapisblue.lapisblue.domain.Movie;
import com.example.lapisblue.lapisblue.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<List<MovieResponse>> getMovies() {
        try {
            List<MovieResponse> movies = movieService.findAll().stream().map(MovieResponse::from).toList();
            return ResponseEntity.ok(movies);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(List.of());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<MovieResponse> getMovie(@PathVariable Integer id) {
        try{
            MovieResponse movie = MovieResponse.from(movieService.findById(id));
            return ResponseEntity.ok(movie);
        }catch (IllegalArgumentException e){
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/test/{id}")
    public ResponseEntity<String> testMovie(@PathVariable Integer id) {
        try{
            Movie movie = movieService.findById(id);
            return ResponseEntity.ok("Found movie: " + movie.getTitle());
        }catch (Exception e){
            return ResponseEntity.ok("Error: " + e.getMessage());
        }
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieResponse>> searchMovies(@RequestParam String query) {
        try {
            List<Movie> movies = movieService.searchByTitle(query);
            List<MovieResponse> movieResponses = movies.stream().map(MovieResponse::from).toList();
            return ResponseEntity.ok(movieResponses);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(List.of());
        }
    }
}

