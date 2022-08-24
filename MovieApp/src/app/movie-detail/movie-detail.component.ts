import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  // localhost:4200/detail/2

  @Input() movie: Movie; // dışardan input olarak aldıgımız değişkeni de burda bu şekilde tanımlıyoruz


  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // route üzerindeki id parametresini almak için bu gerekli
    this.movieService.getMovie(id)
          .subscribe(movie => this.movie = movie);
          // detail.component içerisindeki movie değerini de servis üzerinden gelen movie bilgisiyle doldurduk
  }


}
