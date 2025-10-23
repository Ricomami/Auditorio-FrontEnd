import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes-listar.html',
  styleUrl: './clientes-listar.css'
})
export class ClientesListar {
  clientes = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@gmail.com', telefono: '5551234567', estado: 'Activo' }
  ];
}
