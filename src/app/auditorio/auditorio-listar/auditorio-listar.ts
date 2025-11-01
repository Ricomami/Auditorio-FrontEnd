import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auditorio } from '../../interfaces/auditorio';
import { AuditorioService } from '../../services/auditorio-service';

@Component({
  selector: 'app-auditorio-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './auditorio-listar.html',
  styleUrl: './auditorio-listar.css'
})
export class AuditorioListar {
  auditorios: Auditorio[] = [];

  constructor(private auditorioServicio: AuditorioService) { }

  ngOnInit(): void {
    this.cargarAuditorios();
  }

  cargarAuditorios(): void {
    this.auditorioServicio.obtenerAuditorios().subscribe({
      next: (registros: any) => {
        console.log("Registros devueltos desde API: ", registros);
        this.auditorios = registros.datos;
      },
      error: (err) => {
        console.error("Error al obtener los auditorios: ", err);
      }
    });
  }

  eliminarAuditorio(id:number): void {
    if (confirm('¿Estás seguro de marcar este auditorio como inactivo?')) {
      this.auditorioServicio.eliminarAuditorio(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Auditorio marcado como inactivo correctamente.');
          this.cargarAuditorios(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar auditorio como inactivo: ', err);
          alert('Error al desactivar el auditorio.');
        },
      });
    }
  }
}
