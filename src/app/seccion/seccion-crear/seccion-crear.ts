import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Seccion } from '../../interfaces/seccion';
import { SeccionService } from '../../services/seccion-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-crear',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './seccion-crear.html',
  styleUrl: './seccion-crear.css'
})
export class SeccionCrear {
  seccion: Seccion = {
    id_seccion: 0,
    nombre_seccion: '',
    precio_base: 0,
    auditorio_id: 0,
    imagen_seccion: '',
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private seccionServicio: SeccionService,
    private route: Router
  ) {}

  CrearSeccion(): void {

    this.mensajeExito = null;
    this.mensajeError = null;

    this.seccionServicio.crearSeccion(this.seccion).subscribe({
      next: (respuesta) => {
        console.log('Seccion creado correctamente: ', respuesta);
        alert('Seccion creada exitosamente.');
        this.route.navigate(['/seccion']); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear la seccion: ', err);
        this.mensajeError='Ocurrió un error al crear el seccion.';
      }
    });
  }
}
