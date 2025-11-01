import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionEditar } from './funcion-editar';

describe('FuncionEditar', () => {
  let component: FuncionEditar;
  let fixture: ComponentFixture<FuncionEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
