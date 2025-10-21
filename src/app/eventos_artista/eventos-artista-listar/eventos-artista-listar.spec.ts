import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosArtistaListar } from './eventos-artista-listar';

describe('EventosArtistaListar', () => {
  let component: EventosArtistaListar;
  let fixture: ComponentFixture<EventosArtistaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosArtistaListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosArtistaListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
