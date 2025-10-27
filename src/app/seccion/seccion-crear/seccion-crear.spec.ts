import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCrear } from './seccion-crear';

describe('SeccionCrear', () => {
  let component: SeccionCrear;
  let fixture: ComponentFixture<SeccionCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
