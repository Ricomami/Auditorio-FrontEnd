import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Entrada } from '../../interfaces/entrada';
import { EntradaService } from '../../services/entrada-service';

@Component({
  selector: 'app-entrada-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './entrada-editar.html',
  styleUrl: './entrada-editar.css'
})
export class EntradaEditar {
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
  
    constructor(
      private entradaServicio: EntradaService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    // Ejecutamos al cargar el componente
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.cargarEntrada(Number(id));
      }
    }
  
    // Obtenemos los datos de la entrada a editar
    cargarEntrada(id: number): void {
      this.entradaServicio.obtenerEntradaPorId(id).subscribe({
        next: (data: any) => {
          console.log("Registros devueltos desde API: ", data)
          this.entrada = data.datos;
        },
        error: (err) => {
          console.error('Error al cargar la entrada:', err);
          this.mensajeError = 'No se pudo cargar la entrada.';
        }
      });
    }
  
    // Enviar los cambios al backend
    actualizarEntrada(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      this.entradaServicio.actualizarEntrada(this.entrada.id_entrada, this.entrada).subscribe({
        next: (respuesta) => {
          console.log('Entrada actualizada correctamente:', respuesta, 'Datos enviados: ', this.entrada);
          this.mensajeExito = 'Entrada actualizada exitosamente.';
          setTimeout(() => this.router.navigate(['/entrada']), 1500);
        },
        error: (err) => {
          console.error('Error al actualizar la entrada:', err);
          this.mensajeError = 'Ocurrió un error al actualizar la entrada.';
        }
      });
    }
}
