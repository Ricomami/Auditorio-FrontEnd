import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoCrear } from './evento-crear';

describe('EventoCrear', () => {
  let component: EventoCrear;
  let fixture: ComponentFixture<EventoCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
