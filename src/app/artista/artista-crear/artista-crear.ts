import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Artista } from '../../interfaces/artista';
import { ArtistaService } from '../../services/artista-service';


@Component({
  selector: 'app-artista-crear',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './artista-crear.html',
  styleUrl: './artista-crear.css'
})
export class ArtistaCrear {
  artista: Artista = {
    id_artista: 0,
    nombre_artista: '',
    genero: '',
    descripcion: '',
    imagen_artista: null,
    estado: '',
    created_at: '',
    updated_at: ''
  };

  mensajeExito: string | null = null;
  mensajeError: string | null = null;

  constructor(private artistaServicio: ArtistaService,
    private route: Router
  ) { }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  CrearArtista(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos FormData para poder enviar el archivo
    const formData = new FormData();

    formData.append('nombre_artista', this.artista.nombre_artista);
    formData.append("genero", this.artista.genero);
    formData.append("descripcion", this.artista.descripcion);
    formData.append("estado", this.artista.estado);

    // 👇 Importante: enviar la imagen si existe
    if (this.selectedFile) {
      formData.append("imagen", this.selectedFile);
    }

    this.artistaServicio.crearArtista(formData).subscribe({
      next: (respuesta) => {
        console.log('Artista creado correctamente: ', respuesta);
        this.mensajeExito = 'Artista creado exitosamente.';
        setTimeout(() => this.route.navigate(['/artista']), 1500);
      },
      error: (err) => {
        console.error('Error al crear el artista: ', err);
        this.mensajeError = 'Ocurrió un error al crear el artista.';
      }
    });

  }
}
