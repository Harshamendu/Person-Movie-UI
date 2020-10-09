import { TestBed } from '@angular/core/testing';

import { PersonMovieService } from './person-movie.service';

describe('PersonMovieService', () => {
  let service: PersonMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
