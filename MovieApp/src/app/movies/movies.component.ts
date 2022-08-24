import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List';
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) {}

    // Nesne üretildikten sonra (yani constructordan sonra) çalışan metot burası
    ngOnInit(): void {
        this.getMovies();
    }

    onSelect(movie: Movie): void {
      this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
             });
    }

    
    delete(movie: Movie): void {
        this.movies = this.movies.filter(m =>m!= movie);
    }
  
 
}
