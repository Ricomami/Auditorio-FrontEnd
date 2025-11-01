import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditorioEditar } from './auditorio-editar';

describe('AuditorioEditar', () => {
  let component: AuditorioEditar;
  let fixture: ComponentFixture<AuditorioEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditorioEditar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditorioEditar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
