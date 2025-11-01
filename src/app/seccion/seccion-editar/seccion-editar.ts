import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Seccion } from '../../interfaces/seccion';
import { SeccionService } from '../../services/seccion-service';

@Component({
  selector: 'app-seccion-editar',
  imports: [ RouterLink, CommonModule, FormsModule ],
  templateUrl: './seccion-editar.html',
  styleUrl: './seccion-editar.css'
})
export class SeccionEditar implements OnInit{
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

  constructor(
    private seccionServicio: SeccionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarSeccionPorId(Number(id));
    }
  }

  // Obtenemos los datos del seccion a editar
  cargarSeccionPorId(id: number): void {
    this.seccionServicio.obtenerSeccionPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.seccion = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el seccion:', err);
        this.mensajeError = 'No se pudo cargar el seccion.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarSeccion(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.seccionServicio.actualizarSeccion(this.seccion.id_seccion, this.seccion).subscribe({
      next: (respuesta) => {
        console.log('Seccion actualizada correctamente:', respuesta, 'Datos enviados: ', this.seccion);
        this.mensajeExito = 'Seccion actualizada exitosamente.';
        setTimeout(() => this.router.navigate(['/seccion']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar la seccion:', err);
        this.mensajeError = 'Ocurrió un error al actualizar la seccion.';
      }
    });
  }
}
