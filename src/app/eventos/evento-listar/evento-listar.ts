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
}
