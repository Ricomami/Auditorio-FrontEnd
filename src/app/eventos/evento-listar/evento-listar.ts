import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Evento } from '../../interfaces/evento';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-evento-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './evento-listar.html',
  styleUrl: './evento-listar.css',
})
export class EventoListar {

  eventos: Evento[] = [];
  
    constructor(private eventoServicio: EventoService) { }
  
    ngOnInit(): void {
      this.cargarEntradas();
    }
  
    cargarEntradas() {
      this.eventoServicio.obtenerEventos().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.eventos = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los eventos: ", err);
        }
      });
    }

  eventoss = [
    {
      id:1,
      nombre_evento: 'Concierto Sinfónico',
      descripcion: 'Música clásica en vivo',
      imagen: '',
      fecha: new Date('2025-11-20T19:00:00'),
      hora_fin: new Date('2025-11-20T21:30:00'),
      aforo: 500,
      evento_id: 1,
      estado: 'Activo',
    },
    {
      id:3,
      nombre_evento: 'Obra de Teatro',
      descripcion: 'Una comedia moderna',
      imagen: '',
      fecha: new Date('2025-12-05T18:00:00'),
      hora_fin: new Date('2025-12-05T20:00:00'),
      aforo: 350,
      evento_id: 2,
      estado: 'Pendiente',
    },
  ];
}
