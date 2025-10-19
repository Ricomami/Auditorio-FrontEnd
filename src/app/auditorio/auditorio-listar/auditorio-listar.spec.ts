import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorioListar } from './auditorio-listar';

describe('AuditorioListar', () => {
  let component: AuditorioListar;
  let fixture: ComponentFixture<AuditorioListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorioListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorioListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
