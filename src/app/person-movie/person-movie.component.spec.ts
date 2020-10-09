import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonMovieComponent } from './person-movie.component';

describe('PersonMovieComponent', () => {
  let component: PersonMovieComponent;
  let fixture: ComponentFixture<PersonMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
