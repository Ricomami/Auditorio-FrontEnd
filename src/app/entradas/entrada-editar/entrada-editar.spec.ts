import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaEditar } from './entrada-editar';

describe('EntradaEditar', () => {
  let component: EntradaEditar;
  let fixture: ComponentFixture<EntradaEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
