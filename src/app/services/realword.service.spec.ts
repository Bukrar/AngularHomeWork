import { TestBed } from '@angular/core/testing';

import { RealwordService } from './realword.service';

describe('RealwordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealwordService = TestBed.get(RealwordService);
    expect(service).toBeTruthy();
  });
});
