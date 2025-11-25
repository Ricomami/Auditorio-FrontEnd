import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Auditorio } from '../../interfaces/auditorio';
import { AuditorioService } from '../../services/auditorio-service';

@Component({
  selector: 'app-auditorio-editar',
  imports: [ RouterLink, CommonModule, FormsModule],
  templateUrl: './auditorio-editar.html',
  styleUrl: './auditorio-editar.css'
})
export class AuditorioEditar implements OnInit {
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

  constructor(
    private auditorioServicio: AuditorioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarAuditorio(Number(id));
    }
  }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  // Obtenemos los datos del auditorio a editar
  cargarAuditorio(id: number): void {
    this.auditorioServicio.obtenerAuditorioPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.auditorio = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el auditorio:', err);
        this.mensajeError = 'No se pudo cargar el auditorio.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarAuditorio(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos primero el FormData para poder enviar la nueva imagen en caso de que exista
    const formData = new FormData();

    formData.append('nombre', this.auditorio.nombre);
    formData.append('capacidad', String(this.auditorio.capacidad));
    formData.append('direccion', this.auditorio.direccion);
    formData.append('estado', this.auditorio.estado);
    
    //Enviamos la imagen si existe
    if (this.selectedFile) {
      formData.append('imagen_auditorio', this.selectedFile);
    }
    
    this.auditorioServicio.actualizarAuditorio(this.auditorio.id_auditorio, formData).subscribe({
      next: (respuesta) => {
        console.log('Auditorio actualizado correctamente:', respuesta, 'Datos enviados: ', this.auditorio);
        this.mensajeExito = 'Auditorio actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/auditorio']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el auditorio:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el auditorio.';
      }
    });
  }
}