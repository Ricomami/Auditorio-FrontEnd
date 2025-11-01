import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientoEditar } from './asiento-editar';

describe('AsientoEditar', () => {
  let component: AsientoEditar;
  let fixture: ComponentFixture<AsientoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsientoEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientoEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
