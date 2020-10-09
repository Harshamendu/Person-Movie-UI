import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { PersonMovieComponent } from './person-movie/person-movie.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: '', redirectTo:"/home", pathMatch: 'full'},
  { path: 'home', component: PersonMovieComponent },
  { path: 'persons', component: PersonComponent },
  { path: 'movies', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }