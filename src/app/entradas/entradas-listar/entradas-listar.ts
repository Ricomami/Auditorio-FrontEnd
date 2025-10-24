import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entrada-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entradas-listar.html',
  styleUrl: './entradas-listar.css'
})
export class EntradasListar {
  entradas = [
    { id: 1, asiento_id: 1, cliente_id: 1, precio_final: 250.00, estado: 'Activo' }
  ];
}
