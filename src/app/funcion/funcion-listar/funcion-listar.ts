import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-funcion-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './funcion-listar.html',
  styleUrl: './funcion-listar.css'
})
export class FuncionListar {
  funciones = [
    { id: 1, evento_id: "500", fecha_hora_funcion: "2025-11-10T20:00:00Z", estado: "activa", creado: "2025-09-25T10:30:00Z", actualizado: "2025-10-15T12:45:00Z" },
    { id: 2, evento_id: "501", fecha_hora_funcion: "2025-11-12T19:30:00Z", estado: "activa", creado: "2025-09-28T09:40:00Z", actualizado: "2025-10-10T16:20:00Z" },
    { id: 3, evento_id: "500", fecha_hora_funcion: "2025-11-13T21:00:00Z", estado: "cancelada", creado: "2025-09-30T11:15:00Z", actualizado: "2025-10-05T18:10:00Z" },
    { id: 4, evento_id: "502", fecha_hora_funcion: "2025-11-15T18:00:00Z", estado: "activa", creado: "2025-10-01T08:25:00Z", actualizado: "2025-10-14T20:45:00Z" },
    { id: 5, evento_id: "503", fecha_hora_funcion: "2025-11-20T20:30:00Z", estado: "inactiva", creado: "2025-10-05T15:10:00Z", actualizado: "2025-10-16T11:50:00Z" },

  ];
}
