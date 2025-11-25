import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Asiento } from '../../interfaces/asiento';
import { AsientoService } from '../../services/asiento-service';

@Component({
  selector: 'app-asiento-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './asiento-editar.html',
  styleUrl: './asiento-editar.css'
})
export class AsientoEditar implements OnInit {
  asiento: Asiento = {
    id_asiento: 0,
    seccion_id: 0,
    fila: '',
    numero_asiento: 0,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(
    private asientoServicio: AsientoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarAsiento(Number(id));
    }
  }

  // Obtenemos los datos del asiento a editar
  cargarAsiento(id: number): void {
    this.asientoServicio.obtenerAsientoPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.asiento = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el asiento:', err);
        this.mensajeError = 'No se pudo cargar el asiento.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarAsiento(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.asientoServicio.actualizarAsiento(this.asiento.id_asiento, this.asiento).subscribe({
      next: (respuesta) => {
        console.log('Asiento actualizado correctamente:', respuesta, 'Datos enviados: ', this.asiento);
        this.mensajeExito = 'Asiento actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/asiento']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el asiento:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el asiento.';
      }
    });
  }
}
