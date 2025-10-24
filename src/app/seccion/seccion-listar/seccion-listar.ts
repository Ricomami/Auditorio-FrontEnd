import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seccion-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './seccion-listar.html',
  styleUrl: './seccion-listar.css'
})
export class SeccionListar {
  secciones = [
    //Sin tablas
    { id: "", nombre: "", direccion: "", estado: "" },
    //Con tablas
    // { id: "", nombre: "", precio: "", id_auditorio: "", imagen: "", estado: "", creado: "", actualizado: "" },
    { id: 1, nombre: "Platea Central", precio: "1200", id_auditorio: "1000", imagen: "https://example.com/secciones/platea.jpg", estado: "activo", creado: "2025-09-12T10:45:32Z", actualizado: "2025-10-15T18:20:44Z" },
    { id: 2, nombre: "Balcón Lateral", precio: "850", id_auditorio: "1000", imagen: "https://example.com/secciones/balcon.jpg", estado: "activo", creado: "2025-08-25T09:14:11Z", actualizado: "2025-10-10T13:05:28Z" },
    { id: 3, nombre: "VIP Oro", precio: "2000", id_auditorio: "1001", imagen: "https://example.com/secciones/vip_oro.jpg", estado: "activo", creado: "2025-07-03T16:22:59Z", actualizado: "2025-09-30T20:01:37Z" },
    { id: 4, nombre: "General Baja", precio: "600", id_auditorio: "1001", imagen: "https://example.com/secciones/general_baja.jpg", estado: "inactivo", creado: "2025-09-05T12:33:10Z", actualizado: "2025-10-12T09:45:02Z" },
    { id: 5, nombre: "Palco Superior", precio: "950", id_auditorio: "1002", imagen: "https://example.com/secciones/palco_superior.jpg", estado: "activo", creado: "2025-08-19T08:01:17Z", actualizado: "2025-10-14T11:50:23Z" },

    // {id: 1, nombre: "VIP", precio: 2000, estado: "Activo"},
  ];
}
