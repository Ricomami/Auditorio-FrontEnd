import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pago } from '../../interfaces/pago';
import { PagoService } from '../../services/pago-service';

@Component({
  selector: 'app-pago-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './pago-listar.html',
  styleUrl: './pago-listar.css'
})
export class PagoListar {
  pagos: Pago[] = [];
  
    constructor(private pagoServicio: PagoService) { }
  
    ngOnInit(): void {
      this.cargarPagos();
    }
  
    cargarPagos() {
      this.pagoServicio.obtenerPagos().subscribe({
        next: (registros: any) => {
          console.log("Registros devueltos desde API: ", registros);
          this.pagos = registros.datos;
        },
        error: (err) => {
          console.error("Error al obtener los pagos: ", err);
        }
      });
    }

    eliminarPago(id:number): void {
    if (confirm('¿Estás seguro de marcar este pago como inactivo?')) {
      this.pagoServicio.eliminarPago(id).subscribe({
        next: (respuesta) => {
          console.log('Respuesta del backend: ', respuesta, 'ID con borrado logico: ', id);
          alert('Pago marcado como inactivo correctamente.');
          this.cargarPagos(); //Refrescamos la tabla despues
        },
        error: (err) => {
          console.error('Error al marcar el pago como inactivo: ', err);
          alert('Error al desactivar el pago.');
        },
      });
    }
  }
}
