import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-artista-crear',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
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
