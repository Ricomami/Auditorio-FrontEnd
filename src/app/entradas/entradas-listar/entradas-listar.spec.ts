import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasListar } from './entradas-listar';

describe('EntradasListar', () => {
  let component: EntradasListar;
  let fixture: ComponentFixture<EntradasListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradasListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
