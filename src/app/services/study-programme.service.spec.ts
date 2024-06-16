import { TestBed } from '@angular/core/testing';

import { CelebrantsService } from './celebrants.service';

describe('CelebrantsService', () => {
  let service: CelebrantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebrantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
