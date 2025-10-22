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
    {id: "1001", nombre:"Carlos Mendoza", contrasena:"Cmz2025@!", rol:"admin", imagen:"", estado:"Activo", creado:"Hoy xd", actualizado:"Hace 5 min xd"},
    {id: "1002", nombre: "Laura_Rojas", contraseña: "Lr#Pass321", rol: "vendedor", imagen: "https://example.com/usuarios/laura.png",estado: "activo", creado: "2025-08-25T09:14:11Z",actualizado: "2025-10-10T13:05:28Z"},
    {id: "1003", nombre: "Diego_Herrera", contraseña: "D1ego_h2024", rol: "cliente", imagen: "https://example.com/usuarios/diego.jpg", estado: "inactivo", creado: "2025-07-03T16:22:59Z", actualizado: "2025-09-30T20:01:37Z" },
    {id: "1004", nombre: "Sofia_Garcia", contraseña: "Sg!Aud10", rol: "cliente", imagen: "https://example.com/usuarios/sofia.jpg", estado: "activo", creado: "2025-09-05T12:33:10Z", actualizado: "2025-10-12T09:45:02Z" },
    {id: "1005", nombre: "Valeria_Torres", contraseña: "Vt_venta2025", rol: "vendedor", imagen: "https://example.com/usuarios/valeria.png", estado: "activo", creado: "2025-08-19T08:01:17Z", actualizado: "2025-10-14T11:50:23Z" }

    // {id: 1, nombre: "Auditorio Benito Juarez", direccion: "Av Micasa #63232", estado: "Activo"},
  ];
}