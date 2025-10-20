import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaCrear } from './artista-crear';

describe('ArtistaCrear', () => {
  let component: ArtistaCrear;
  let fixture: ComponentFixture<ArtistaCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistaCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
