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
      this.cargarSeccions();
    }
  
    cargarSeccions() {
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
}
