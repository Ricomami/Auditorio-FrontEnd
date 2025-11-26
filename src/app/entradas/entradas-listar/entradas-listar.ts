import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Entrada } from '../../interfaces/entrada';
import { EntradaService } from '../../services/entrada-service';

@Component({
  selector: 'app-entrada-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './entradas-listar.html',
  styleUrl: './entradas-listar.css'
})
export class EntradasListar {
  entradas: Entrada[] = [];
  
    constructor(private entradaServicio: EntradaService) { }
  
    ngOnInit(): void {
      this.cargarEntradas();
    }
    cargarEntradas(): void {
      this.entradaServicio.obtenerEntradas().subscribe({
      next: (registros: any) => {
        console.log("Registros devueltos desde API: ", registros);
        this.entradas = registros.datos;
      },
      error: (err) => {
        console.error("Error al obtener las entradas: ", err);
      }
    });
  }

  eliminarEntrada(id:number): void {
    if (confirm('¿Estás seguro de marcar esta entrada como inactiva?')) {
      this.entradaServicio.eliminarEntrada(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Entrada marcado como inactivo correctamente.');
          this.cargarEntradas(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar la entrada como inactiva: ', err);
          alert('Error al desactivar la entrada.');
        },
      });
    }
  }
  }
