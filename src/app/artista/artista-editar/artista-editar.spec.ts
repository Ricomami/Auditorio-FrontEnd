import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaEditar } from './artista-editar';

describe('ArtistaEditar', () => {
  let component: ArtistaEditar;
  let fixture: ComponentFixture<ArtistaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
