import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Entrada } from '../../interfaces/entrada';
import { EntradaService } from '../../services/entrada-service';

@Component({
  selector: 'app-entrada-crear',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './entradas-crear.html',
  styleUrl: './entradas-crear.css'
})
export class EntradasCrear {
  entrada: Entrada = { 
    id_entrada: 0,
    asiento_id: 0, 
    pago_id:0,
    funcion_id: 0, 
    cliente_id: 0, 
    precio_final: 0, 
    estado: '',
    created_at:'',
    updated_at:''
   };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private entradaServicio: EntradaService,
    private route: Router
  ) { }

  CrearEntrada(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.entradaServicio.crearEntrada(this.entrada).subscribe({
      next: (respuesta) => {
        console.log('Entrada creada correctamente: ', respuesta);
        this.mensajeExito = 'Entrada creada exitosamente.';
        setTimeout(() => this.route.navigate(['/entrada']), 1500);
      },
      error: (err) => {
        console.error('Error al crear la entrada: ', err);
        this.mensajeError = 'Ocurrió un error al crear el entrada.';
      }
    });

  }
}


