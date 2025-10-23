import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesCrear } from './clientes-crear';

describe('ClientesCrear', () => {
  let component: ClientesCrear;
  let fixture: ComponentFixture<ClientesCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
