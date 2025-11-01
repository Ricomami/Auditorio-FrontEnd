import { Component } from '@angular/core';
import  {CommonModule} from '@angular/common';
import  {RouterLink} from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../interfaces/usuario';

// COMPONENTE CON LISTA FOREACH
@Component({
  selector: 'app-usuario-listar',
  imports: [ RouterLink, CommonModule],
  templateUrl: './usuario-listar.html',
  styleUrl: './usuario-listar.css'
})
export class UsuarioListar {
  usuarios: Usuario[] = [];
  
    constructor(private usuarioServicio: UsuarioService) { }
  
    ngOnInit(): void {
      this.cargarUsuarios();
    }
  
    cargarUsuarios() {
      this.usuarioServicio.obtenerUsuarios().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.usuarios = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los usuarios: ", err);
        }
      });
    }

    eliminarUsuario(id:number): void {
    if (confirm('¿Estás seguro de marcar este usuario como inactivo?')) {
      this.usuarioServicio.eliminarUsuario(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Usuario marcado como inactivo correctamente.');
          this.cargarUsuarios(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar usuario como inactivo: ', err);
          alert('Error al desactivar el usuario.');
        },
      });
    }
  }
}