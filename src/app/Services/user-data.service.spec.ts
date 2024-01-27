import { TestBed } from '@angular/core/testing';

import { SingletonService } from './user-data.service';

describe('SingletonService', () => {
  let service: SingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
