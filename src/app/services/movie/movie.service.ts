import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = "http://localhost:8000/api/movies";
  movie: Movie = {};
  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<Movie[]>(this.url, {})
  }

  // deleteMovieById(this.movie.id) {
  //   return this.http.delete<Movie>(this.movie.id, {})
  // }


}
