import { TestBed } from '@angular/core/testing';

import { Asiento } from './asiento';

describe('Asiento', () => {
  let service: Asiento;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Asiento);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
