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
  
    constructor(private auditorioServicio: UsuarioService) { }
  
    ngOnInit(): void {
      this.cargarUsuarios();
    }
  
    cargarUsuarios() {
      this.auditorioServicio.obtenerUsuarios().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.usuarios = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los usuarios: ", err);
        }
      });
    }
}