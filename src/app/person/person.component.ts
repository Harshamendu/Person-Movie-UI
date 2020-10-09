import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { PersonService } from './person.service';
import { MatTableDataSource } from '@angular/material/table';
import {take,takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons:Person[];
  constructor(private personService: PersonService ) {
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons():Person[]{
    this.personService.getAllPersons()
    .subscribe(res => {
     this.dataSource.data = res;
      return res;
    });
  return null;
  }

  displayedColumns: string[] = ['Person ID', 'First Name', 'Last Name', 'Subscription Type'];
  public dataSource = new MatTableDataSource<Person>();

}