import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Funcion } from '../../interfaces/funcion';
import { FuncionService } from '../../services/funcion-service';

@Component({
  selector: 'app-funcion-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './funcion-listar.html',
  styleUrl: './funcion-listar.css'
})
export class FuncionListar {
  funciones: Funcion[] = [];
  
    constructor(private funcionServicio: FuncionService) { }
  
    ngOnInit(): void {
      this.cargarFunciones();
    }
  
    cargarFunciones() {
      this.funcionServicio.obtenerFunciones().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.funciones = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los funciones: ", err);
        }
      });
    }

    eliminarFuncion(id:number): void {
    if (confirm('¿Estás seguro de marcar este funcion como inactivo?')) {
      this.funcionServicio.eliminarFuncion(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Funcion marcada como inactiva correctamente.');
          this.cargarFunciones(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar funcion como inactiva: ', err);
          alert('Error al desactivar el funcion.');
        },
      });
    }
  }
}
