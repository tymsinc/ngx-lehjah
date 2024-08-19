import { TestBed } from '@angular/core/testing';

import { LehjahService } from './lehjah.service';

describe('LehjahService', () => {
  let service: LehjahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LehjahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
