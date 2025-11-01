import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEditar } from './pago-editar';

describe('PagoEditar', () => {
  let component: PagoEditar;
  let fixture: ComponentFixture<PagoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
