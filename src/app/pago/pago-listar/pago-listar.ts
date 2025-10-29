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

  pagoss = [
    { id: 1, cliente: "101", metodo: "tarjeta", monto: "1200.00", fecha_pago: "2025-10-15T14:32:11Z", estado: "completado", creado: "2025-10-15T14:32:11Z", actualizado: "2025-10-15T14:32:11Z" },
    { id: 2, cliente: "102", metodo: "efectivo", monto: "850.00", fecha_pago: "2025-10-10T10:25:43Z", estado: "completado", creado: "2025-10-10T10:25:43Z", actualizado: "2025-10-10T10:25:43Z" },
    { id: 3, cliente: "103", metodo: "transferencia", monto: "2000.00", fecha_pago: "2025-10-05T17:41:27Z", estado: "pendiente", creado: "2025-10-05T17:41:27Z", actualizado: "2025-10-07T09:12:03Z" },
    { id: 4, cliente: "104", metodo: "paypal", monto: "600.00", fecha_pago: "2025-09-30T09:55:19Z", estado: "cancelado", creado: "2025-09-30T09:55:19Z", actualizado: "2025-09-30T12:15:22Z" },
    { id: 5, cliente: "101", metodo: "tarjeta", monto: "950.00", fecha_pago: "2025-10-18T11:45:58Z", estado: "completado", creado: "2025-10-18T11:45:58Z", actualizado: "2025-10-18T11:45:58Z" },
  ];
}
