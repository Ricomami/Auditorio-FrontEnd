import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entrada-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './entradas-listar.html',
  styleUrl: './entradas-listar.css'
})
export class EntradasListar {
  entradas = [
    { id: 1, asiento_id: 40, pago_id:1, funcion_id: 12, cliente_id: 1, precio_final: 250.00, estado: 'Activo' }
  ];
}
