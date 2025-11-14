import { Component, OnInit } from '@angular/core';
import { Artista } from '../../interfaces/artista';
import { ArtistaService } from '../../services/artista-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artista-editar',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './artista-editar.html',
  styleUrl: './artista-editar.css'
})
export class ArtistaEditar implements OnInit {
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

  constructor(
    private artistaServicio: ArtistaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Ejecutamos al cargar el componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarArtista(Number(id));
    }
  }

  selectedFile!: File;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Obtenemos los datos del artista a editar
  cargarArtista(id: number): void {
    this.artistaServicio.obtenerArtistaPorId(id).subscribe({
      next: (data: any) => {
        console.log("Registros devueltos desde API: ", data)
        this.artista = data.datos;
      },
      error: (err) => {
        console.error('Error al cargar el artista:', err);
        this.mensajeError = 'No se pudo cargar el artista.';
      }
    });
  }

  // Enviar los cambios al backend
  actualizarArtista(): void {
    this.mensajeExito = null;
    this.mensajeError = null;

    //Creamos primero el FormData para enviar la nueva imagen si se seleccionó una
    const formData = new FormData();
    
    formData.append('nombre_artista', this.artista.nombre_artista);
    formData.append("genero", this.artista.genero);
    formData.append("descripcion", this.artista.descripcion);
    formData.append("estado", this.artista.estado);

    //Enviamos la imagen si existe
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }


    this.artistaServicio.actualizarArtista(this.artista.id_artista, formData).subscribe({
      next: (respuesta) => {
        console.log('Artista actualizado correctamente:', respuesta, 'Datos enviados: ', this.artista);
        this.mensajeExito = 'Artista actualizado exitosamente.';
        setTimeout(() => this.router.navigate(['/artista']), 1500);
      },
      error: (err) => {
        console.error('Error al actualizar el artista:', err);
        this.mensajeError = 'Ocurrió un error al actualizar el artista.';
      }
    });
  }
}
