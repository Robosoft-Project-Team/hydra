import { TestBed } from '@angular/core/testing';

import { CvAnalysisService } from './cv-analysis.service';

describe('CvAnalysisService', () => {
  let service: CvAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
