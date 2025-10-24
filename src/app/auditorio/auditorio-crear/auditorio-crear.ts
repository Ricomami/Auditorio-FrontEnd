import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auditorio-crear',
  standalone: true,
  imports: [FormsModule],
=======
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auditorio-crear',
  imports: [RouterLink, CommonModule],
>>>>>>> e9be27379400beadabc070bfae7eb8bb43b81040
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
