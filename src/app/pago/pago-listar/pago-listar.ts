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
}
