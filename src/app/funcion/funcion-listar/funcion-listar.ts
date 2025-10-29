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
}
