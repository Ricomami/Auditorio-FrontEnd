import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auditorio } from '../../interfaces/auditorio';
import { AuditorioService } from '../../services/auditorio-service';

@Component({
  selector: 'app-auditorio-crear',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './auditorio-crear.html',
  styleUrl: './auditorio-crear.css'
})
export class AuditorioCrear {
  auditorio: Auditorio = {
    id_auditorio: 0,
    nombre: '',
    capacidad: 0,
    direccion: '',
    imagen: null,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private auditorioServicio: AuditorioService,
    private route: Router
  ) {}

  CrearAuditorio(): void {

    this.mensajeExito = null;
    this.mensajeError = null;

    this.auditorioServicio.crearAuditorio(this.auditorio).subscribe({
      next: (respuesta) => {
        console.log('Auditorio creado correctamente: ', respuesta);
        alert('Auditorio creado exitosamente.');
        this.route.navigate(['/auditorio']); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear el auditorio: ', err);
        this.mensajeError='Ocurrió un error al crear el auditorio.';
      }
    });
  }
}
