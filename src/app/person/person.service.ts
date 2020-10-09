import { HttpClient} from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Person } from './person.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons:Person[];
  baseUrl:string = "http://localhost:8081/person";
  constructor(private httpClient:HttpClient ) { 

  }

  getAllPersons():Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.baseUrl+"/getPersons");
  }

  
}
