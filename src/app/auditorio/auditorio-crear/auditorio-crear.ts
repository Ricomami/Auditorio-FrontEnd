import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
    imagen_auditorio: null,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private auditorioServicio: AuditorioService,
    private route: Router
  ) { }

  selectedFile!: File;
  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  } 

  CrearAuditorio(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creanis FormData para poder enviar el archivo
    const formData = new FormData();

    formData.append('nombre', this.auditorio.nombre);
    formData.append('capacidad', String(this.auditorio.capacidad));
    formData.append('direccion', this.auditorio.direccion);
    formData.append('estado', this.auditorio.estado);

    //Enviamos la imagen en caso de existir
    if (this.selectedFile) {
      formData.append("imagen_auditorio", this.selectedFile);
    }

    this.auditorioServicio.crearAuditorio(formData).subscribe({
      next: (respuesta) => {
        console.log('Auditorio creado correctamente: ', respuesta);
        this.mensajeExito = 'Auditorio creado exitosamente.';
        setTimeout(() => this.route.navigate(['/auditorio']), 1500); //Redirigimos a la vista de 'listar'
      },
      error: (err) => {
        console.error('Error al crear el auditorio: ', err);
        this.mensajeError='Ocurrió un error al crear el auditorio.';
      }
    });
  }
}
