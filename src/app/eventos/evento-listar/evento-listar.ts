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
      this.cargarEventos();
    }
  
    cargarEventos() {
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

    
  eliminarEvento(id:number): void {
    if (confirm('¿Estás seguro de marcar este evento como inactivo?')) {
      this.eventoServicio.eliminarEvento(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Evento marcado como inactivo correctamente.');
          this.cargarEventos(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar evento como inactivo: ', err);
          alert('Error al desactivar el evento.');
        },
      });
    }
  }
}
