import { TestBed } from '@angular/core/testing';

import { AuditorioService } from './auditorio-service';

describe('AuditorioService', () => {
  let service: AuditorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
