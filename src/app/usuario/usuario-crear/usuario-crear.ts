import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-usuario-crear',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './usuario-crear.html',
  styleUrl: './usuario-crear.css'
})
export class UsuarioCrear {
  usuario: Usuario = {
  id_usuario: 0,
  nombre_usuario: '',
  ['contraseña']: '',
  rol: '',
  imagen_usuario: '',
  estado: '',
  created_at: '',
  updated_at: ''
  };

  confirmar_contrasena: string='';

  verContrasena: boolean = false;
  toggleVerContrasena(): void {
    this.verContrasena = !this.verContrasena;
  }

  verConfirmar: boolean = false;
  toggleVerConfirmar(): void {
    this.verConfirmar = !this.verConfirmar;
  }

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private usuarioServicio: UsuarioService,
    private route: Router
  ) { }

  CrearUsuario(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.usuarioServicio.crearUsuario(this.usuario).subscribe({
      next: (respuesta) => {
        console.log('Usuario creado correctamente: ', respuesta);
        this.mensajeExito = 'Usuario creado exitosamente.';
        setTimeout(() => this.route.navigate(['/usuario']), 1500); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear el usuario: ', err);
        this.mensajeError = 'Ocurrió un error al crear el usuario.';
      }
    });
  }
}