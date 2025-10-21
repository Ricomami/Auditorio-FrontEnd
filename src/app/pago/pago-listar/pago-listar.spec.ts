import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoListar } from './pago-listar';

describe('PagoListar', () => {
  let component: PagoListar;
  let fixture: ComponentFixture<PagoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
