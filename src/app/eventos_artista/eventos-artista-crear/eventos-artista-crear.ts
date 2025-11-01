import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { EventosArtistaService } from '../../services/eventos-artista-service';
import { EventosArtista } from '../../interfaces/eventos-artista';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos-artista-crear',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './eventos-artista-crear.html',
  styleUrl: './eventos-artista-crear.css'
})
export class EventosArtistaCrear {
  eventosartista: EventosArtista = {
    evento_id: 0,
    artista_id: 0,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private eventosartistaServicio: EventosArtistaService,
    private route: Router
  ) { }

  CrearEventosArtista(): void {

    this.mensajeExito = null;
    this.mensajeError = null;

    this.eventosartistaServicio.crearEventosArtista(this.eventosartista).subscribe({
      next: (respuesta) => {
        console.log('Registro de artista en el evento creado correctamente: ', respuesta);
        alert('Registro de artista en el evento creado exitosamente.');
        this.route.navigate(['/eventos_artista']); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear el eventosartista: ', err);
        this.mensajeError = 'Ocurrió un error al crear el eventosartista.';
      }
    });
  }
}
