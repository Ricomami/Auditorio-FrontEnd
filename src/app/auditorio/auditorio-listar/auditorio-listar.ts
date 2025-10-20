import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auditorio-listar',
  imports: [ RouterLink, CommonModule ],
  templateUrl: './auditorio-listar.html',
  styleUrl: './auditorio-listar.css',
})
export class AuditorioListar {
  auditorios = [
    {id: 1, nombre: "Auditorio Benito Juarez", direccion: "Av Micasa #63232", estado: "Activo"},
    {id: 2, nombre: "Auditorio Morelos", direccion: "Av Micasa #15166", estado: "Inactivo"},
    {id: 3, nombre: "Auditorio Parques", direccion: "Av Micasa #98971", estado: "Inactivo"},
    {id: 4, nombre: "Auditorio Nomadas", direccion: "Av Sucasa #91623", estado: "Activo"},
  ];
}
