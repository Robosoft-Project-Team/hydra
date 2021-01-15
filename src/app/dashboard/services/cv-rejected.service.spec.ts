import { TestBed } from '@angular/core/testing';

import { CvRejectedService } from './cv-rejected.service';

describe('CvRejectedService', () => {
  let service: CvRejectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvRejectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
