import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:Movie[];
  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies():Movie[] {
    this.movieService.getMovies().subscribe(res => {
     this.dataSource.data = res;
      return res;
    });
    return null;
  }

  displayedColumns: string[] = ['IMDB ID', 'Title', 'Story Line','Rating', 'Release Date'];
  public dataSource = new MatTableDataSource<Movie>();
  // dataSource = this.getAllMovies();

}