import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonMovie } from './person-movie.model';
import { PersonMovieService } from './person-movie.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-person-movie',
  styleUrls: ['./person-movie.component.css'],
  templateUrl: './person-movie.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PersonMovieComponent implements OnInit {

  personMovie:any;
  constructor(private personMovieService:PersonMovieService){

  }

  ngOnInit(): void {
    this.getAllPersonMovies();
  }

  getAllPersonMovies(){
    this.personMovieService.getAllPersonMovies()
    .subscribe(res => this.dataSource.data = res);
  }

  displayedColumns: string[] = ['Person Id', 'First Name', 'Last Name', 'Subscription Type'];
  expandedElement: PersonMovie | null;
  public dataSource = new MatTableDataSource<PersonMovie>();

}