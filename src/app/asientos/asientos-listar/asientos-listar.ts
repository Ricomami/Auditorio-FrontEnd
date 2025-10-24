import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asiento-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asientos-listar.html',
  styleUrl: './asientos-listar.css'
})
export class AsientosListar {
  asientos = [
    { id: 1, seccion: 1, fila: 'A', numero: 5, estado: 'Activo' },
    { id: 2, seccion: 2, fila: 'B', numero: 10, estado: 'Pendiente' }
  ];
}
