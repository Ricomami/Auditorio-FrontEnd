import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventosArtista } from '../../interfaces/eventos-artista';
import { EventosArtistaService } from '../../services/eventos-artista-service';

@Component({
  selector: 'app-eventos-artista-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './eventos-artista-listar.html',
  styleUrl: './eventos-artista-listar.css'
})
export class EventosArtistaListar {
  eventosartistas: EventosArtista[] = [];
  
    constructor(private eventosartistaServicio: EventosArtistaService) { }
  
    ngOnInit(): void {
      this.cargarEventosartista();
    }
  
    cargarEventosartista() {
      this.eventosartistaServicio.obtenerEventosArtistas().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.eventosartistas = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los eventosartista: ", err);
        }
      });

      
    }

    eliminarEventosArtista(evento_id:number, artista_id:number): void {
    if (confirm('¿Estás seguro de marcar este auditorio como inactivo?')) {
      this.eventosartistaServicio.eliminarEventosArtista(evento_id, artista_id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID de evento y de artista con borrado logico: ', evento_id, ' ', artista_id);
          alert('Evento de artista marcado como inactivo correctamente.');
          this.cargarEventosartista(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar auditorio como inactivo: ', err);
          alert('Error al desactivar el artista del evento.');
        },
      });
    }
  }
}
