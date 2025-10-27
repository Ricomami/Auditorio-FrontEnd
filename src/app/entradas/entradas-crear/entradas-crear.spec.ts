import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasCrear } from './entradas-crear';

describe('EntradasCrear', () => {
  let component: EntradasCrear;
  let fixture: ComponentFixture<EntradasCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradasCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradasCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
