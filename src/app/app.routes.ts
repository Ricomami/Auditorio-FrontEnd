import { Routes } from '@angular/router';

import {ArtistaCrear} from  './artista/artista-crear/artista-crear';
import {ArtistaListar} from  './artista/artista-listar/artista-listar';
// import {AsientoCrear} from  './';
// import {AsientoListar} from  './';
import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';
// import {ClienteCrear} from  './';
// import {ClienteListar} from  './';
// import {EntradaCrear} from  './';
// import {EntradaListar} from  './';
// import {EventoCrear} from  './';
// import {EventoListar} from  './';
import {EventosArtistaListar} from './eventos_artista/eventos-artista-listar/eventos-artista-listar'
import {EventosArtistaCrear} from './eventos_artista/eventos-artista-crear/eventos-artista-crear'
import {FuncionListar} from './funcion/funcion-listar/funcion-listar'
import {FuncionCrear} from './funcion/funcion-crear/funcion-crear'
import {PagoListar} from './pago/pago-listar/pago-listar'
import {PagoCrear} from './pago/pago-crear/pago-crear'
import {SeccionListar} from './seccion/seccion-listar/seccion-listar'
import {SeccionCrear} from './seccion/seccion-crear/seccion-crear'
import {UsuarioListar} from './usuario/usuario-listar/usuario-listar'
import {UsuarioCrear} from './usuario/usuario-crear/usuario-crear'

export const routes: Routes = [
    {path: 'artista', component: ArtistaListar },
    {path: 'artista/crear', component: ArtistaCrear},
    // {path: 'asiento', component: AsientoListar },
    // {path: 'asiento/crear', component: AsientoCrear},
    {path: 'auditorio', component: AuditorioListar },
    {path: 'auditorio/crear', component: AuditorioCrear},
    // {path: 'cliente', component: ClienteListar },
    // {path: 'cliente/crear', component: ClienteCrear},
    // {path: 'entrada', component: EntradaListar },
    // {path: 'entrada/crear', component: EntradaCrear},
    // {path: 'evento', component: EventoListar },
    // {path: 'evento/crear', component: EventoCrear},
    {path: 'eventos_artista', component: EventosArtistaListar },
    {path: 'eventos_artista/crear', component: EventosArtistaCrear},
    {path: 'pago', component: PagoListar },
    {path: 'pago/crear', component: PagoCrear},
    {path: 'funcion', component: FuncionListar },
    {path: 'funcion/crear', component: FuncionCrear},
    {path: 'seccion', component: SeccionListar },
    {path: 'seccion/crear', component: SeccionCrear},
    {path: 'usuario', component: UsuarioListar },
    {path: 'usuario/crear', component: UsuarioCrear},
];
