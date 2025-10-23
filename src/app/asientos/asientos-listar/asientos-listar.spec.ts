import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientosListar } from './asientos-listar';

describe('AsientosListar', () => {
  let component: AsientosListar;
  let fixture: ComponentFixture<AsientosListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsientosListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientosListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
