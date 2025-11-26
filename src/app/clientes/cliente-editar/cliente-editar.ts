import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.css'
})
export class ClienteEditar implements OnInit {
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

  constructor(
    private clienteServicio: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarCliente(Number(id));
    }
  }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Obtenemos los datos del cliente a editar
  cargarCliente(id: number): void {
    this.clienteServicio.obtenerClientePorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.cliente = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el cliente:', err);
        this.mensajeError = 'No se pudo cargar el cliente.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarCliente(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos primero el FormData para enviar la nueva imagen si se seleccionó una
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


    this.clienteServicio.actualizarCliente(this.cliente.id_cliente, formData).subscribe({
      next: (respuesta) => {
        console.log('Cliente actualizado correctamente:', respuesta, 'Datos enviados: ', this.cliente);
        this.mensajeExito = 'Cliente actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/cliente']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el cliente:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el cliente.';
      }
    });
  }
}
