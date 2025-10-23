import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auditorio-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditorio-listar.html',
  styleUrl: './auditorio-listar.css'
})
export class AuditorioListar {
  auditorios = [
    { id: 1, nombre: 'Auditorio Nacional', capacidad: 5000, direccion: 'CDMX', estado: 'Activo' }
  ];
}
