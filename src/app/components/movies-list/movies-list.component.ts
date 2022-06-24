import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private mv: MovieService) { }

  ngOnInit(): void {
    this.initMovie();
  }

  initMovie() {
    this.mv.getAllMovies().subscribe(res => {
      this.movies = res;
    })
  }

}

// import { Component, OnInit } from '@angular/core';
// import { MovieService } from 'src/app/services/movie/movie.service';
// import { Movie } from 'src/app/interfaces/movie';

// @Component({
//   selector: 'app-favorite',
//   templateUrl: './favorite.component.html',
//   styleUrls: ['./favorite.component.css']
// })
// export class FavoriteComponent implements OnInit {
//   favoriteMovies: Movie = []

//   constructor(
//     private mv: MovieService
//   ) { }

//   initMovie() {
//     this.mv.getAllMovies().subscribe(res => {
//       this.favoriteMovies = res;
//     })
//   }
     

//   deleteMovie(movieID): void {
//     this.mv.deleteMovieById().subscribe(res => {
//       this.favoriteMovies = movieID;
//     })
//   }

// }