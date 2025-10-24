import { Routes } from '@angular/router';


import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';
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
import { ArtistaListar } from './artistas/artista-listar/artista-listar';
import { ArtistaCrear } from './artistas/artista-crear/artista-crear';
import { AsientosListar } from './asientos/asientos-listar/asientos-listar';
import { AsientosCrear } from './asientos/asientos-crear/asientos-crear';
import { ClientesListar } from './clientes/clientes-listar/clientes-listar';
import { ClientesCrear } from './clientes/clientes-crear/clientes-crear';
import { EntradasListar } from './entradas/entradas-listar/entradas-listar';
import { EntradasCrear } from './entradas/entradas-crear/entradas-crear';
import { EventoListar } from './eventos/evento-listar/evento-listar';
import { EventoCrear } from './eventos/evento-crear/evento-crear';


export const routes: Routes = [
    {path: 'artista', component: ArtistaListar },
    {path: 'artista/crear', component: ArtistaCrear},
    {path: 'asiento', component: AsientosListar },
    {path: 'asiento/crear', component: AsientosCrear},
    {path: 'auditorio', component: AuditorioListar },
    {path: 'auditorio/crear', component: AuditorioCrear},
    {path: 'cliente', component: ClientesListar },
    {path: 'cliente/crear', component: ClientesCrear},
    {path: 'entrada', component: EntradasListar },
    {path: 'entrada/crear', component: EntradasCrear},
    {path: 'evento', component: EventoListar },
    {path: 'evento/crear', component: EventoCrear},
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
