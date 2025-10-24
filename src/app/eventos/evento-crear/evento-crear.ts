import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evento-crear',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evento-crear.html',
  styleUrl: './evento-crear.css',
})
export class EventoCrear {
  evento = {
    nombre_evento: '',
    descripcion: '',
    imagen_evento: '',
    fecha: '',
    hora_fin: '',
    aforo: 0,
    auditorio_id: 0,
    estado: 'Activo',
  };

  guardar() {
    console.log('Evento guardado:', this.evento);
    alert('Evento registrado con éxito ✅');
  }
}
