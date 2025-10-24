import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evento-listar.html',
  styleUrl: './evento-listar.css',
})
export class EventoListar {
  eventos = [
    {
      nombre_evento: 'Concierto Sinfónico',
      descripcion: 'Música clásica en vivo',
      fecha: new Date('2025-11-20T19:00:00'),
      hora_fin: new Date('2025-11-20T21:30:00'),
      aforo: 500,
      auditorio_id: 1,
      estado: 'Activo',
    },
    {
      nombre_evento: 'Obra de Teatro',
      descripcion: 'Una comedia moderna',
      fecha: new Date('2025-12-05T18:00:00'),
      hora_fin: new Date('2025-12-05T20:00:00'),
      aforo: 350,
      auditorio_id: 2,
      estado: 'Pendiente',
    },
  ];
}
