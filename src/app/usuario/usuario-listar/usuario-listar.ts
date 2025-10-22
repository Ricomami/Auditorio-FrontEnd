import { Component } from '@angular/core';
import  {CommonModule} from '@angular/common';
import  {RouterLink} from '@angular/router';

// COMPONENTE CON LISTA FOREACH
@Component({
  selector: 'app-usuario-listar',
  imports: [ RouterLink, CommonModule],
  templateUrl: './usuario-listar.html',
  styleUrl: './usuario-listar.css'
})
export class UsuarioListar {
  usuarios = [
    //Sin tablas
    {id: "", nombre:"", direccion:"", estado:"" },
    //Con tablas
    {id: "", nombre:"", contrasena:"", rol:"", imagen:"", estado:"", creado:"", actualizado:""}
    // {id: 1, nombre: "Auditorio Benito Juarez", direccion: "Av Micasa #63232", estado: "Activo"},
  ];
}