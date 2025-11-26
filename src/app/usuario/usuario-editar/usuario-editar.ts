import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuario-service';

@Component({
  selector: 'app-usuario-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './usuario-editar.html',
  styleUrl: './usuario-editar.css'
})
export class UsuarioEditar implements OnInit{
usuario: Usuario = {
    id_usuario: 0,
    nombre_usuario: '',
    password:'',
    rol: '',
    imagen_usuario: '',
    estado: '',
    created_at: '',
    updated_at: ''
  };

  confirmar_contrasena: String='';

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

  constructor(
    private usuarioServicio: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarUsuarioPorId(Number(id));
    }
  }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  // Obtenemos los datos del usuario a editar
  cargarUsuarioPorId(id: number): void {
    this.usuarioServicio.obtenerUsuarioPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.usuario = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el usuario:', err);
        this.mensajeError = 'No se pudo cargar el usuario.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarUsuario(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos primero el FormData para enviar la nueva imagen si se seleccionó una
    const formData = new FormData();
    
    formData.append('nombre_usuario', this.usuario.nombre_usuario);
    formData.append("password", this.usuario.password);
    formData.append("rol", this.usuario.rol);
    formData.append("estado", this.usuario.estado);

    // Enviamos la imagen, si existe
    if (this.selectedFile) {
      formData.append("imagen_usuario", this.selectedFile);
    }

    console.log(formData);
    this.usuarioServicio.actualizarUsuario(this.usuario.id_usuario, formData).subscribe({
      next: (respuesta) => {
        console.log('Usuario actualizado correctamente:', respuesta, 'Datos enviados: ', this.usuario);
        this.mensajeExito = 'Usuario actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/usuario']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el usuario:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el usuario.';
      }
    });
  }
}
