import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-entrada-crear',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './entradas-crear.html',
  styleUrl: './entradas-crear.css'
})
export class EntradasCrear {
  entrada = { asiento_id: '', cliente_id: '', funcion_id: '', precio_final: '', estado: 'Activo' };

  guardar() {
    console.log('Entrada creada:', this.entrada);
    alert('✅ Entrada registrada correctamente');
  }
}


