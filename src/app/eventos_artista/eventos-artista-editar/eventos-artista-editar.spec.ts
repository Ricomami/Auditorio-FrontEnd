import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosArtistaEditar } from './eventos-artista-editar';

describe('EventosArtistaEditar', () => {
  let component: EventosArtistaEditar;
  let fixture: ComponentFixture<EventosArtistaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosArtistaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosArtistaEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
