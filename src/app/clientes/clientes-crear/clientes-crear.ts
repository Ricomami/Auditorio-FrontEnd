import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';

@Component({
  selector: 'app-clientes-crear',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './clientes-crear.html',
  styleUrl: './clientes-crear.css'
})
export class ClientesCrear {
  cliente: Cliente = {
    id_cliente: 0,
    nombre: '',
    apellido_pat: '',
    apellido_mat: '',
    correo: '',
    telefono: 0,
    imagen_cliente: "",
    fecha_registro: "",
    estado: '',
    created_at: "",
    updated_at: "",
  };
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private clienteServicio: ClienteService,
    private route: Router
  ) { }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  CrearCliente(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos FormData para poder enviar el archivo
    const formData = new FormData();

    formData.append('nombre', this.cliente.nombre);
    formData.append("apellido_mat", this.cliente.apellido_mat);
    formData.append("apellido_pat", this.cliente.apellido_pat);
    formData.append("correo", this.cliente.correo);
    formData.append("telefono", String(this.cliente.telefono));
    formData.append("estado", this.cliente.estado);

    // 👇 Importante: enviar la imagen si existe
    if (this.selectedFile) {
      formData.append("imagen_cliente", this.selectedFile);
    }

    this.clienteServicio.crearCliente(formData).subscribe({
      next: (respuesta) => {
        console.log('Cliente creado correctamente: ', respuesta);
        this.mensajeExito = 'Cliente creado exitosamente.';
        setTimeout(() => this.route.navigate(['/cliente']), 1500);
      },
      error: (err) => {
        console.error('Error al crear el cliente: ', err);
        this.mensajeError = 'Ocurrió un error al crear el cliente.';
      }
    });

  }
}
