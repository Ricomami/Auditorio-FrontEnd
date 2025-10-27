import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auditorio-crear',
  imports: [RouterLink, CommonModule],
  templateUrl: './auditorio-crear.html',
  styleUrl: './auditorio-crear.css'
})
export class AuditorioCrear {
  auditorio = { nombre: '', capacidad: '', direccion: '', imagen: '', estado: 'Activo' };

  guardar() {
    console.log('Auditorio creado:', this.auditorio);
    alert('✅ Auditorio registrado correctamente');
  }
}
