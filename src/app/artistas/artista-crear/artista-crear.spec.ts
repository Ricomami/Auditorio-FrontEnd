import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistaCrear } from './artista-crear';
import { FormsModule } from '@angular/forms';

describe('ArtistaCrearComponent', () => {
  let component: ArtistaCrear;
  let fixture: ComponentFixture<ArtistaCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ArtistaCrear]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistaCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
