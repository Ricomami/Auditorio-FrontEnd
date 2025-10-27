import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionListar } from './seccion-listar';

describe('SeccionListar', () => {
  let component: SeccionListar;
  let fixture: ComponentFixture<SeccionListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
