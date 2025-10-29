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
  
    cargarEntradas() {
      this.entradaServicio.obtenerEntradas().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.entradas = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los entradas: ", err);
        }
      });
    }
  }
