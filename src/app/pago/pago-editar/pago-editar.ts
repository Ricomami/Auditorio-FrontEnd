import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Pago } from '../../interfaces/pago';
import { PagoService } from '../../services/pago-service';

@Component({
  selector: 'app-pago-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './pago-editar.html',
  styleUrl: './pago-editar.css'
})
export class PagoEditar {
  pago: Pago = {
    id_pago: 0,
    cliente_id: 0,
    metodo_pago: '',
    monto: 0,
    fecha_pago: '',
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(
    private pagoServicio: PagoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarPago(Number(id));
    }
  }

  // Obtenemos los datos del pago a editar
  cargarPago(id: number): void {
    this.pagoServicio.obtenerPagoPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.pago = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el pago:', err);
        this.mensajeError = 'No se pudo cargar el pago.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarPago(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    this.pagoServicio.actualizarPago(this.pago.id_pago, this.pago).subscribe({
      next: (respuesta) => {
        console.log('Pago actualizado correctamente:', respuesta, 'Datos enviados: ', this.pago);
        this.mensajeExito = 'Pago actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/pago']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el pago:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el pago.';
      }
    });
  }
}
