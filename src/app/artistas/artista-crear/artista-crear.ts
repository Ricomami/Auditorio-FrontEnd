import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artista-crear',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './artista-crear.html',
  styleUrl: './artista-crear.css'
})
export class ArtistaCrear {
  artista = { nombre: '', genero: '', descripcion: '', imagen: '', estado: 'Activo' };

  guardar() {
    console.log('Artista creado:', this.artista);
    alert('✅ Artista registrado correctamente');
  }
}
