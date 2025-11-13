import { Component, OnInit } from '@angular/core';
import { EventosArtista } from '../../interfaces/eventos-artista';
import { EventosArtistaService } from '../../services/eventos-artista-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos-artista-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './eventos-artista-editar.html',
  styleUrl: './eventos-artista-editar.css'
})
export class EventosArtistaEditar implements OnInit {
  eventosartista: EventosArtista = {
    evento_id: 0,
    artista_id: 0,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(
    private eventosArtistaServicio: EventosArtistaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const evento_id = this.route.snapshot.paramMap.get('evento_id');
    const artista_id = this.route.snapshot.paramMap.get('artista_id');
    console.log('evento_id de la URL: ', evento_id, '\nartista_id de la url: ', artista_id)
    console.log('Evento', artista_id)
    if (evento_id && artista_id) {
      this.cargarEventoArtistaPorId(Number(evento_id), Number(artista_id));
    }
  }

  // Obtenemos los datos del evento artista a editar
  cargarEventoArtistaPorId(evento_id: number, artista_id: number): void {
    this.eventosArtistaServicio.obtenerEventosArtistaPorId(evento_id, artista_id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.eventosartista = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el evento de artista:', err);
        this.mensajeError = 'No se pudo cargar el evento de artista.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarEventoArtista(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.eventosArtistaServicio.actualizarEventosArtista(this.eventosartista.evento_id, this.eventosartista.artista_id, this.eventosartista).subscribe({
      next: (respuesta) => {
        console.log('Evento de artista actualizado correctamente:', respuesta, 'Datos enviados: ', this.eventosartista);
        this.mensajeExito = 'Evento de artista actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/eventos_artista']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el evento de artista:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el evento de artista.';
      }
    });
  }

}
