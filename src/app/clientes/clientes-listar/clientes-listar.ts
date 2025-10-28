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
  
    cargarClientes() {
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
}
