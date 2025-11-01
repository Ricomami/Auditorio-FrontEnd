import { Component } from '@angular/core';
import  {CommonModule} from '@angular/common';
import  {Router, RouterLink} from '@angular/router';
import { Pago } from '../../interfaces/pago';
import { PagoService } from '../../services/pago-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pago-crear',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './pago-crear.html',
  styleUrl: './pago-crear.css'
})
export class PagoCrear {
  pago: Pago = {
    id_pago: 0,
    cliente_id: 0,
    metodo_pago: '',
    monto: 0,
    fecha_pago: null,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private pagoServicio: PagoService,
    private route: Router
  ) {}

  CrearPago(): void {
    //Validacion para poder dejar la fecha en null por si el pago no ha sido realizado
    if( !this.pago.fecha_pago) {
      this.pago.fecha_pago = null
    }

    this.mensajeExito = null;
    this.mensajeError = null;

    this.pagoServicio.crearPago(this.pago).subscribe({
      next: (respuesta) => {
        console.log('Pago creado correctamente: ', respuesta, 'Datos de pago: ', this.pago);
        alert('Pago creado exitosamente.');
        this.route.navigate(['/pago']); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear el pago: ', err);
        this.mensajeError='Ocurrió un error al crear el pago.';
      }
    });
  }
}
