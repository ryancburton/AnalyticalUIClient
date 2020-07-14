import { TestBed } from '@angular/core/testing';

import { AnalyticalDataSetService } from './analytical-data-set.service';

describe('AnalyticalDataSetService', () => {
  let service: AnalyticalDataSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticalDataSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
