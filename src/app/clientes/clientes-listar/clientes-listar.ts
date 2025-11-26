import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clientes-listar.html',
  styleUrl: './clientes-listar.css'
})
export class ClientesListar {
   clientes: Cliente[] = [];
  
    constructor(private clienteServicio: ClienteService) { }
  
    ngOnInit(): void {
      this.cargarClientes();
    }
  
    cargarClientes(): void {
    this.clienteServicio.obtenerClientes().subscribe({
      next: (registros: any) => {
        console.log("Registros devueltos desde API: ", registros);
        this.clientes = registros.datos;
      },
      error: (err) => {
        console.error("Error al obtener los clientes: ", err);
      }
    });
  }

  eliminarCliente(id:number): void {
    if (confirm('¿Estás seguro de marcar este cliente como inactivo?')) {
      this.clienteServicio.eliminarCliente(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Cliente marcado como inactivo correctamente.');
          this.cargarClientes(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar cliente como inactivo: ', err);
          alert('Error al desactivar el cliente.');
        },
      });
    }
  }
}
