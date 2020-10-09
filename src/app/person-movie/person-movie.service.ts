import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonMovie } from './person-movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonMovieService {

  baseUrl:string = 'http://localhost:8081/personMovie';
  constructor(private httpClient:HttpClient) { 

  }

  ngOnInit(): void {
   
  }

  getAllPersonMovies():Observable<PersonMovie[]>{
    return this.httpClient.get<PersonMovie[]>(this.baseUrl+'/getAllPersonMovie');
  }
}
