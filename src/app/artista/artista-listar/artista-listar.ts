import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArtistaService } from '../../services/artista-service';
import { Artista } from '../../interfaces/artista';

@Component({
  selector: 'app-artista-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './artista-listar.html',
  styleUrl: './artista-listar.css'
})
export class ArtistaListar {
  artistas: Artista[] = [];

  constructor(private artistaServicio: ArtistaService) { }

  ngOnInit(): void {
    this.cargarArtistas();
  }

  cargarArtistas() {
    this.artistaServicio.obtenerArtistas().subscribe({
      next: (registros: any) => {
        console.log("Registros devueltos desde API: ", registros);
        this.artistas = registros.datos;
      },
      error: (err) => {
        console.error("Error al obtener los artistas: ", err);
      }
    });
  }
  artistass = [
    { id: 1, nombre: 'Shakira', genero: 'Pop', descripcion: 'Cantante colombiana', estado: 'Activo' },
    { id: 2, nombre: 'Bad Bunny', genero: 'Urbano', descripcion: 'Cantante puertorriqueño', estado: 'Activo' }
  ];
}