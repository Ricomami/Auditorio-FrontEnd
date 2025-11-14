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

  cargarArtistas(): void {
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

  eliminarArtista(id:number): void {
    if (confirm('¿Estás seguro de marcar este artista como inactivo?')) {
      this.artistaServicio.eliminarArtista(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Artista marcado como inactivo correctamente.');
          this.cargarArtistas(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar artista como inactivo: ', err);
          alert('Error al desactivar el artista.');
        },
      });
    }
  }
}