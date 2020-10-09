import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { MovieComponent } from './movie/movie.component';
import { PersonMovieComponent } from './person-movie/person-movie.component';
import { material } from './material';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MovieComponent,
    PersonMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    material,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
