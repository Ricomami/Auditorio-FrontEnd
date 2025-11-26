import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Seccion } from '../../interfaces/seccion';
import { SeccionService } from '../../services/seccion-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seccion-crear',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './seccion-crear.html',
  styleUrl: './seccion-crear.css'
})
export class SeccionCrear {
  seccion: Seccion = {
    id_seccion: 0,
    nombre_seccion: '',
    precio_base: 0,
    auditorio_id: 0,
    imagen_seccion: '',
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
    mensajeError: string | null = null;
  
    constructor(private seccionServicio: SeccionService,
      private route: Router
    ) { }
  
    selectedFile!: File;
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
  
    CrearSeccion(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      //Creamos FormData para poder enviar el archivo
      const formData = new FormData();
  
      formData.append('nombre_seccion', this.seccion.nombre_seccion);
      formData.append('precio_base', String(this.seccion.precio_base));
      formData.append('auditorio_id', String(this.seccion.auditorio_id));
      formData.append("estado", this.seccion.estado);
  
      // 👇 Importante: enviar la imagen si existe
      if (this.selectedFile) {
        formData.append("imagen_seccion", this.selectedFile);
      }
  
      this.seccionServicio.crearSeccion(formData).subscribe({
        next: (respuesta) => {
          console.log('Seccion creada correctamente: ', respuesta);
          this.mensajeExito = 'Seccion creada exitosamente.';
          setTimeout(() => this.route.navigate(['/seccion']), 1500);
        },
        error: (err) => {
          console.error('Error al crear la seccion: ', err);
          this.mensajeError = 'Ocurrió un error al crear la seccion.';
        }
      });
  
    }
}
