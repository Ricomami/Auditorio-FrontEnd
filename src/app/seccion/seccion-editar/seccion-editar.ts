import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Seccion } from '../../interfaces/seccion';
import { SeccionService } from '../../services/seccion-service';

@Component({
  selector: 'app-seccion-editar',
  imports: [ RouterLink, CommonModule, FormsModule ],
  templateUrl: './seccion-editar.html',
  styleUrl: './seccion-editar.css'
})
export class SeccionEditar implements OnInit{
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
  
    constructor(
      private seccionServicio: SeccionService,
      private route: ActivatedRoute,
      private router: Router
    ) {}
  
    // Ejecutamos al cargar el componente
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.cargarSeccion(Number(id));
      }
    }
  
    selectedFile!: File;
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
  
    // Obtenemos los datos del seccion a editar
    cargarSeccion(id: number): void {
      this.seccionServicio.obtenerSeccionPorId(id).subscribe({
        next: (data: any) => {
          console.log("Registros devueltos desde API: ", data)
          this.seccion = data.datos;
        },
        error: (err) => {
          console.error('Error al cargar la seccion:', err);
          this.mensajeError = 'No se pudo cargar la seccion.';
        }
      });
    }
  
    // Enviar los cambios al backend
    actualizarSeccion(): void {
      this.mensajeExito = null;
      this.mensajeError = null;
  
      //Creamos primero el FormData para enviar la nueva imagen si se seleccionó una
      const formData = new FormData();
  
      formData.append('nombre_seccion', this.seccion.nombre_seccion);
      formData.append('precio_base', String(this.seccion.precio_base));
      formData.append('auditorio_id', String(this.seccion.auditorio_id));
      formData.append("estado", this.seccion.estado);
  
      // 👇 Importante: enviar la imagen si existe
      if (this.selectedFile) {
        formData.append("imagen_seccion", this.selectedFile);
      }
  
      this.seccionServicio.actualizarSeccion(this.seccion.id_seccion, formData).subscribe({
        next: (respuesta) => {
          console.log('Seccion actualizado correctamente:', respuesta, 'Datos enviados: ', this.seccion);
          this.mensajeExito = 'Seccion actualizado exitosamente.';
          setTimeout(() => this.router.navigate(['/seccion']), 1500);
        },
        error: (err) => {
          console.error('Error al actualizar el seccion:', err);
          this.mensajeError = 'Ocurrió un error al actualizar el seccion.';
        }
      });
    }
}
