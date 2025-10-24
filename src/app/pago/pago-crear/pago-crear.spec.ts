import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoCrear } from './pago-crear';

describe('PagoCrear', () => {
  let component: PagoCrear;
  let fixture: ComponentFixture<PagoCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
