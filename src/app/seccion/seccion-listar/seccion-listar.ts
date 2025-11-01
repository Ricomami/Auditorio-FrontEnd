import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Seccion } from '../../interfaces/seccion';
import { SeccionService } from '../../services/seccion-service';

@Component({
  selector: 'app-seccion-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './seccion-listar.html',
  styleUrl: './seccion-listar.css'
})
export class SeccionListar {
  secciones: Seccion[] = [];
  
    constructor(private seccionServicio: SeccionService) { }
  
    ngOnInit(): void {
      this.cargarSecciones();
    }
  
    cargarSecciones() {
      this.seccionServicio.obtenerSecciones().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.secciones = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los secciones: ", err);
        }
      });
    }

    eliminarSeccion(id:number): void {
      if (confirm('¿Estas seguro de marcar esta seccion como inactiva?')) {
        this.seccionServicio.eliminarSeccion(id).subscribe({
          next: (respuesta) => {
            console.log('Respuesta del backend: ', respuesta, ' ID con borrado lógico: ', id);
            alert('Seccion marcada como inactiva correctamente.');
            this.cargarSecciones(); //Refrescamos la tabla de nuevo
          },
          error: (err) => {
            console.error('Error al marcar la seccion como inactiva: ', err);
            alert('Error al desactivar el auditorio.');
          },
        });
      }
    }
}
