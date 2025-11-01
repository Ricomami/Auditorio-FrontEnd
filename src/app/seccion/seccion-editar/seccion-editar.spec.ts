import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionEditar } from './seccion-editar';

describe('SeccionEditar', () => {
  let component: SeccionEditar;
  let fixture: ComponentFixture<SeccionEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
