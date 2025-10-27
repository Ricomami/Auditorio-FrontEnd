import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clientes-listar.html',
  styleUrl: './clientes-listar.css'
})
export class ClientesListar {
  clientes = [
    { id: 1, nombre: 'Juan', apellido_pat: 'Perez', apellido_mat: 'Rodriguez', correo: 'juan@gmail.com', telefono: '5551234567', imagen: '', estado: 'Activo' }
  ];
}
