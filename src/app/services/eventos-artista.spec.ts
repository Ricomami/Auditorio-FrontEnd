import { TestBed } from '@angular/core/testing';

import { EventosArtista } from './eventos-artista';

describe('EventosArtista', () => {
  let service: EventosArtista;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosArtista);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
