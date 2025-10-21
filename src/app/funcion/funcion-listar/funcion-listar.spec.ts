import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionListar } from './funcion-listar';

describe('FuncionListar', () => {
  let component: FuncionListar;
  let fixture: ComponentFixture<FuncionListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
