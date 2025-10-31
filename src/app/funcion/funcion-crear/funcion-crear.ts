import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FuncionService } from '../../services/funcion-service';
import { Funcion } from '../../interfaces/funcion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-funcion-crear',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './funcion-crear.html',
  styleUrl: './funcion-crear.css'
})
export class FuncionCrear {
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

  constructor(private funcionServicio: FuncionService,
    private route: Router
  ) {}

  CrearFuncion(): void {

    this.mensajeExito = null;
    this.mensajeError = null;

    this.funcionServicio.crearFuncion(this.funcion).subscribe({
      next: (respuesta) => {
        console.log('Funcion creado correctamente: ', respuesta);
        alert('Funcion de evento creada exitosamente.');
        this.route.navigate(['/funcion']); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear la funcion: ', err);
        this.mensajeError='Ocurrió un error al crear la funcion.';
      }
    });
  }

}
