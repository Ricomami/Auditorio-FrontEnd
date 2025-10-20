import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaListar } from './artista-listar';

describe('ArtistaListar', () => {
  let component: ArtistaListar;
  let fixture: ComponentFixture<ArtistaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
