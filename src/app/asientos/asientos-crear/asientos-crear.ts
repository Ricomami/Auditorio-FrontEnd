import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Asiento } from '../../interfaces/asiento';
import { AsientoService } from '../../services/asiento-service';

@Component({
  selector: 'app-asiento-crear',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './asientos-crear.html',
  styleUrl: './asientos-crear.css'
})
export class AsientosCrear {
  asiento: Asiento = { 
    id_asiento: 0,
    seccion_id: 0,
    fila: '', 
    numero_asiento: 0, 
    estado: 'Activo',
    created_at: '',
    updated_at: '' 
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private asientoServicio: AsientoService,
      private route: Router
    ) {}
  
    CrearAsiento(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      this.asientoServicio.crearAsiento(this.asiento).subscribe({
        next: (respuesta) => {
          console.log('Asiento creado correctamente: ', respuesta);
          this.mensajeExito = 'Asiento creado exitosamente.';
          setTimeout(() => this.route.navigate(['/asiento']), 1500); //Redirigimos a la vista de 'listar'
        },
        error: (err) => {
          console.error('Error al crear el asiento: ', err);
          this.mensajeError='Ocurrió un error al crear el asiento.';
        }
      });
    }
}
