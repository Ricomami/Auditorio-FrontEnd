import { TestBed } from '@angular/core/testing';

import { EventosArtistaService } from './eventos-artista-service';

describe('EventosArtistaService', () => {
  let service: EventosArtistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosArtistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
