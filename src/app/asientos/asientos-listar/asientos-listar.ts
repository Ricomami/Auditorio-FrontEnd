import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Asiento } from '../../interfaces/asiento';
import { AsientoService } from '../../services/asiento-service';

@Component({
  selector: 'app-asiento-listar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './asientos-listar.html',
  styleUrl: './asientos-listar.css'
})
export class AsientosListar {
  asientos: Asiento[] = [];

  constructor(private asientoServicio: AsientoService) { }

  ngOnInit(): void {
    this.cargarAsientos();
  }

  cargarAsientos() {
    this.asientoServicio.obtenerAsientos().subscribe({
      next: (registros: any) => {
        console.log("Registros devueltos desde API: ", registros);
        this.asientos = registros.datos;
      },
      error: (err) => {
        console.error("Error al obtener los asientos: ", err);
      }
    });
  }
}
