import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Auditorio } from '../../interfaces/auditorio';
import { AuditorioService } from '../../services/auditorio-service';

@Component({
  selector: 'app-auditorio-crear',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './auditorio-crear.html',
  styleUrl: './auditorio-crear.css'
})
export class AuditorioCrear {
  auditorio: Auditorio = {
    id_auditorio: 0,
    nombre: '',
    capacidad: 0,
    direccion: '',
    imagen: '',
    estado: ''
  }

  constructor(private auditorioServicio: AuditorioService,
    private route: Router
  ) { }

  // CrearAuditorio() {
  //   console.log('Funcion Crear Cliente');
  //   this.auditorioServicio.guardarAuditorio(this.auditorio).subscribe({
  //     next(value) {
  //       console.log('guardar auditorio ' + value);
  //     },
  //     error(err) {
  //       console.log('error al guardar el auditorio: ' + err);
  //     },
  //   });
  //   this.route.navigate(['/auditorio']);


  //   guardar() {
  //     console.log('Auditorio creado:', this.auditorio);
  //     alert('✅ Auditorio registrado correctamente');
  //   }
  // }
}
