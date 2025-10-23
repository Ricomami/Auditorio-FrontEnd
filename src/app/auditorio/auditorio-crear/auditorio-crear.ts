import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auditorio-crear',
  standalone: true,
  imports: [FormsModule],
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
