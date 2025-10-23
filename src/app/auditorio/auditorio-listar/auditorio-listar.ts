import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auditorio } from '../../interfaces/auditorio';
import { AuditorioService } from '../../services/auditorio-service';

@Component({
  selector: 'app-auditorio-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './auditorio-listar.html',
  styleUrl: './auditorio-listar.css',
})
export class AuditorioListar {
  auditorios: Auditorio[] = [];

  constructor(private auditorioServicio: AuditorioService) {}

  ngOnInit(): void{
    this.cargarAuditorios();
  }  

  cargarAuditorios(){
    this.auditorioServicio.obtenerAuditorios().subscribe(
      next: (respuesta: any) => {
        
      }
      (registros: Auditorio[])=>{
        console.log("Registros devueltos dede SQL: ", registros);
        this.auditorios = registros.datos;
      }
    )
   }

  // auditorios = [
  //   { id: 1000, nombre: "Auditorio Central", capacidad: "2000", direccion: "Av. Principal 123, Ciudad", imagen: "https://example.com/auditorios/central.jpg", estado: "activo", creado: "2025-08-15T09:00:00Z", actualizado: "2025-10-15T12:00:00Z" },
  //   { id: 1001, nombre: "Auditorio Norte", capacidad: "1500", direccion: "Calle Norte 45, Ciudad", imagen: "https://example.com/auditorios/norte.jpg", estado: "activo", creado: "2025-08-20T10:15:00Z", actualizado: "2025-10-10T14:30:00Z" },
  //   { id: 1002, nombre: "Auditorio Sur", capacidad: "1800", direccion: "Av. Sur 78, Ciudad", imagen: "https://example.com/auditorios/sur.jpg", estado: "activo", creado: "2025-08-25T11:20:00Z", actualizado: "2025-10-12T16:45:00Z" },
  //   { id: 1003, nombre: "Auditorio Este", capacidad: "1200", direccion: "Calle Este 56, Ciudad", imagen: "https://example.com/auditorios/este.jpg", estado: "inactivo", creado: "2025-09-01T08:40:00Z", actualizado: "2025-10-14T18:10:00Z" },
  //   { id: 1004, nombre: "Auditorio Oeste", capacidad: "1000", direccion: "Av. Oeste 89, Ciudad", imagen: "https://example.com/auditorios/oeste.jpg", estado: "activo", creado: "2025-09-05T09:50:00Z", actualizado: "2025-10-16T19:20:00Z" },
  // ];
}
