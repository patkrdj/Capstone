package com.example.lapisblue.lapisblue.Controller;

import com.example.lapisblue.lapisblue.DTO.MovieRequest;
import com.example.lapisblue.lapisblue.domain.Movie;
import com.example.lapisblue.lapisblue.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public List<MovieRequest> getMovies() {
        return movieService.findAll().stream().map(MovieRequest::from).toList();
    }

    @GetMapping("/{id}")
    public MovieRequest getMovie(@PathVariable Integer id) {
        return MovieRequest.from(movieService.findById(id));
    }
}

