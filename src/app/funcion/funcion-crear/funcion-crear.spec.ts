import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionCrear } from './funcion-crear';

describe('FuncionCrear', () => {
  let component: FuncionCrear;
  let fixture: ComponentFixture<FuncionCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
