import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { EventoService } from '../../services/evento-service';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-evento-crear',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './evento-crear.html',
  styleUrl: './evento-crear.css',
})
export class EventoCrear {
  evento: Evento = {
    id_evento: 0,
    nombre_evento: '',
    descripcion: '',
    imagen_evento: '',
    fecha: '',
    // hora_inicio:'',
    // fecha_fin:'',
    hora_fin: '',
    aforo: 0,
    auditorio_id: 0,
    estado: '',
    created_at: '',
    updated_at: '',

  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private eventoServicio: EventoService,
    private route: Router
  ) { }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  CrearEvento(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos FormData para poder enviar el archivo
    const formData = new FormData();

    formData.append('nombre_evento', this.evento.nombre_evento);
    formData.append("descripcion", this.evento.descripcion);
    formData.append("fecha", this.evento.fecha);
    formData.append("hora_fin", this.evento.hora_fin);
    formData.append("aforo", String(this.evento.aforo));
    formData.append("auditorio_id", String(this.evento.auditorio_id));
    formData.append("estado", this.evento.estado);

    // 👇 Importante: enviar la imagen si existe
    if (this.selectedFile) {
      formData.append("imagen_evento", this.selectedFile);
    }

    this.eventoServicio.crearEvento(formData).subscribe({
      next: (respuesta) => {
        console.log('Evento creado correctamente: ', respuesta);
        this.mensajeExito = 'Evento creado exitosamente.';
        setTimeout(() => this.route.navigate(['/evento']), 1500);
      },
      error: (err) => {
        console.error('Error al crear el evento: ', err);
        this.mensajeError = 'Ocurrió un error al crear el evento.';
      }
    });

  }
}
