import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies:Movie[];
  baseUrl:string = "http://localhost:8081/movie";
  constructor(private httpClient:HttpClient) { 

  }

  getMovies(){
    return this.httpClient.get<Movie[]>(this.baseUrl+"/getMovies");
  }

}