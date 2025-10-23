import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artista-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artista-listar.html',
  styleUrl: './artista-listar.css'
})
export class ArtistaListar {
  artistas = [
    { id: 1, nombre: 'Shakira', genero: 'Pop', descripcion: 'Cantante colombiana', estado: 'Activo' },
    { id: 2, nombre: 'Bad Bunny', genero: 'Urbano', descripcion: 'Cantante puertorriqueño', estado: 'Activo' }
  ];
}
