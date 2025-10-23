import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asiento-crear',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './asientos-crear.html',
  styleUrl: './asientos-crear.css'
})
export class AsientosCrear {
  asiento = { seccion_id: '', fila: '', numero_asiento: '', estado: 'Activo' };

  guardar() {
    console.log('Asiento creado:', this.asiento);
    alert('✅ Asiento registrado correctamente');
  }
}
