import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorioCrear } from './auditorio-crear';

describe('AuditorioCrear', () => {
  let component: AuditorioCrear;
  let fixture: ComponentFixture<AuditorioCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorioCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorioCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
