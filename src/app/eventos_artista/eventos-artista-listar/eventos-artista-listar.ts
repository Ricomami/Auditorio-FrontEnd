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
  eventos_artistas = [
    { id_evento: "500", id_artista: "300", estado: "activo", creado: "2025-09-20T10:30:00Z", actualizado: "2025-10-15T12:45:00Z" },
    { id_evento: "500", id_artista: "301", estado: "activo", creado: "2025-09-22T14:20:00Z", actualizado: "2025-10-10T09:35:00Z" },
    { id_evento: "501", id_artista: "302", estado: "inactivo", creado: "2025-09-25T08:15:00Z", actualizado: "2025-10-05T11:00:00Z" },
    { id_evento: "502", id_artista: "303", estado: "activo", creado: "2025-09-28T12:00:00Z", actualizado: "2025-10-14T18:25:00Z" },
    { id_evento: "503", id_artista: "304", estado: "activo", creado: "2025-10-01T09:10:00Z", actualizado: "2025-10-18T20:40:00Z" },

  ];
}
