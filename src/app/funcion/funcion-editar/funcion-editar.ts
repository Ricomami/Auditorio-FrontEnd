import { Component } from '@angular/core';
import { Funcion } from '../../interfaces/funcion';
import { FuncionService } from '../../services/funcion-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcion-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './funcion-editar.html',
  styleUrl: './funcion-editar.css'
})
export class FuncionEditar {
  funcion: Funcion = {
      id_funcion: 0,
      evento_id: 0,
      fecha_hora_funcion: '',
      estado: '',
      created_at: '',
      updated_at: ''
    };
  
    mensajeExito: string | null = null;
    mensajeError: string | null = null;
  
    constructor(
      private funcionServicio: FuncionService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    // Ejecutamos al cargar el componente
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.cargarFuncion(Number(id));
      }
    }
  
    // Obtenemos los datos del funcion a editar
    cargarFuncion(id: number): void {
      this.funcionServicio.obtenerFuncionPorId(id).subscribe({
        next: (data: any) => {
          console.log("Registros devueltos desde API: ", data)
          this.funcion = data.datos;
        },
        error: (err) => {
          console.error('Error al cargar el funcion:', err);
          this.mensajeError = 'No se pudo cargar el funcion.';
        }
      });
    }
  
    // Enviar los cambios al backend
    actualizarFuncion(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      this.funcionServicio.actualizarFuncion(this.funcion.id_funcion, this.funcion).subscribe({
        next: (respuesta) => {
          console.log('Funcion actualizada correctamente:', respuesta, 'Datos enviados: ', this.funcion);
          this.mensajeExito = 'Funcion actualizado exitosamente.';
          setTimeout(() => this.router.navigate(['/funcion']), 1500);
        },
        error: (err) => {
          console.error('Error al actualizar la funcion:', err);
          this.mensajeError = 'Ocurrió un error al actualizar el funcion.';
        }
      });
    }
}
