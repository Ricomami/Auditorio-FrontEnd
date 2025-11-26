import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Evento } from '../../interfaces/evento';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-evento-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './evento-editar.html',
  styleUrl: './evento-editar.css'
})
export class EventoEditar {
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
  
    constructor(
      private eventoServicio: EventoService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    // Ejecutamos al cargar el componente
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.cargarEvento(Number(id));
      }
    }
  
    selectedFile!: File;
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
  
    // Obtenemos los datos del evento a editar
    cargarEvento(id: number): void {
      this.eventoServicio.obtenerEventoPorId(id).subscribe({
        next: (data: any) => {
          console.log("Registros devueltos desde API: ", data)
          this.evento = data.datos;
        },
        error: (err) => {
          console.error('Error al cargar el evento:', err);
          this.mensajeError = 'No se pudo cargar el evento.';
        }
      });
    }
  
    // Enviar los cambios al backend
    actualizarEvento(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      //Creamos primero el FormData para enviar la nueva imagen si se seleccionó una
      const formData = new FormData();
      
      formData.append('nombre_evento', this.evento.nombre_evento);
    formData.append("descripcion", this.evento.descripcion);
    formData.append("fecha", this.evento.fecha);
    formData.append("hora_fin", this.evento.hora_fin);
    formData.append("aforo", String(this.evento.aforo));
    formData.append("auditorio_id", String(this.evento.auditorio_id));
    formData.append("estado", this.evento.estado);
  
      //Enviamos la imagen si existe
      if (this.selectedFile) {
      formData.append("imagen_evento", this.selectedFile);
      } 

      this.eventoServicio.actualizarEvento(this.evento.id_evento, formData).subscribe({
        next: (respuesta) => {
          console.log('Evento actualizado correctamente:', respuesta, 'Datos enviados: ', this.evento);
          this.mensajeExito = 'Evento actualizado exitosamente.';
          setTimeout(() => this.router.navigate(['/evento']), 1500);
        },
        error: (err) => {
          console.error('Error al actualizar el evento:', err);
          this.mensajeError = 'Ocurrió un error al actualizar el evento.';
        }
      });
    }
  
}
