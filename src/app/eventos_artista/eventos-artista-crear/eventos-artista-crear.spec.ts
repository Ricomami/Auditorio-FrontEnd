import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosArtistaCrear } from './eventos-artista-crear';

describe('EventosArtistaCrear', () => {
  let component: EventosArtistaCrear;
  let fixture: ComponentFixture<EventosArtistaCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosArtistaCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosArtistaCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
