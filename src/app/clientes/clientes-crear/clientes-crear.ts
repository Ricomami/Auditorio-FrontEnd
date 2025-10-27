import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientes-crear',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './clientes-crear.html',
  styleUrl: './clientes-crear.css'
})
export class ClientesCrear {
  cliente = { nombre: '', apellido_pat: '', apellido_mat: '', correo: '', telefono: '', estado: 'Activo' };

  guardar() {
    console.log('Cliente creado:', this.cliente);
    alert('✅ Cliente registrado correctamente');
  }
}
