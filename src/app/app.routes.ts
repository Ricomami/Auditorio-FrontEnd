import { Routes } from '@angular/router';
import { ArtistaListar } from './artista/artista-listar/artista-listar';
import { ArtistaCrear } from './artista/artista-crear/artista-crear';
import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';
import { AsientosListar } from './asientos/asientos-listar/asientos-listar';
import { AsientosCrear } from './asientos/asientos-crear/asientos-crear';
import { ClientesListar } from './clientes/clientes-listar/clientes-listar';
import { ClientesCrear } from './clientes/clientes-crear/clientes-crear';
import { EntradasListar } from './entradas/entradas-listar/entradas-listar';
import { EntradasCrear } from './entradas/entradas-crear/entradas-crear';

export const routes: Routes = [
  { path: '', redirectTo: '/artistas/listar', pathMatch: 'full' },

  // 🎵 ARTISTAS
  { path: 'artistas/listar', component: ArtistaListar },
  { path: 'artistas/crear', component: ArtistaCrear },

  // 💺 ASIENTOS
  { path: 'asientos/listar', component: AsientosListar },
  { path: 'asientos/crear', component: AsientosCrear },

  // 🏛️ AUDITORIOS
  { path: 'auditorios/listar', component: AuditorioListar },
  { path: 'auditorios/crear', component: AuditorioCrear },

  // 👤 CLIENTES
  { path: 'clientes/listar', component: ClientesListar },
  { path: 'clientes/crear', component: ClientesCrear },

  // 🎫 ENTRADAS
  { path: 'entradas/listar', component: EntradasListar },
  { path: 'entradas/crear', component: EntradasCrear },
];