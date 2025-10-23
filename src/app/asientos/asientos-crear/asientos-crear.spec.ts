import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientosCrear } from './asientos-crear';

describe('AsientosCrear', () => {
  let component: AsientosCrear;
  let fixture: ComponentFixture<AsientosCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsientosCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientosCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
