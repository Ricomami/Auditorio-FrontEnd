import { Routes } from '@angular/router';

import { ArtistaCrear } from './artista/artista-crear/artista-crear';
import { ArtistaEditar } from './artista/artista-editar/artista-editar';
import { ArtistaListar } from './artista/artista-listar/artista-listar';

import { AsientosCrear } from './asientos/asientos-crear/asientos-crear';
import { AsientoEditar } from './asientos/asiento-editar/asiento-editar';
import { AsientosListar } from './asientos/asientos-listar/asientos-listar';

import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioEditar} from  './auditorio/auditorio-editar/auditorio-editar';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';

import { ClientesCrear } from './clientes/clientes-crear/clientes-crear';
import { ClienteEditar } from './clientes/cliente-editar/cliente-editar';
import { ClientesListar } from './clientes/clientes-listar/clientes-listar';

import { EntradasCrear } from './entradas/entradas-crear/entradas-crear';
import { EntradaEditar } from './entradas/entrada-editar/entrada-editar';
import { EntradasListar } from './entradas/entradas-listar/entradas-listar';

import {EventosArtistaCrear} from './eventos_artista/eventos-artista-crear/eventos-artista-crear'
import {EventosArtistaEditar} from './eventos_artista/eventos-artista-editar/eventos-artista-editar'
import {EventosArtistaListar} from './eventos_artista/eventos-artista-listar/eventos-artista-listar'

import { EventoCrear } from './eventos/evento-crear/evento-crear';
import { EventoEditar } from './eventos/evento-editar/evento-editar';
import { EventoListar } from './eventos/evento-listar/evento-listar';

import {FuncionCrear} from './funcion/funcion-crear/funcion-crear'
import {FuncionEditar} from './funcion/funcion-editar/funcion-editar'
import {FuncionListar} from './funcion/funcion-listar/funcion-listar'

import {PagoCrear} from './pago/pago-crear/pago-crear'
import {PagoEditar} from './pago/pago-editar/pago-editar'
import {PagoListar} from './pago/pago-listar/pago-listar'

import {SeccionCrear} from './seccion/seccion-crear/seccion-crear'
import {SeccionEditar} from './seccion/seccion-editar/seccion-editar'
import {SeccionListar} from './seccion/seccion-listar/seccion-listar'

import {UsuarioCrear} from './usuario/usuario-crear/usuario-crear'
import {UsuarioEditar} from './usuario/usuario-editar/usuario-editar'
import {UsuarioListar} from './usuario/usuario-listar/usuario-listar'


export const routes: Routes = [
    {path: 'artista', component: ArtistaListar },
    {path: 'artista/crear', component: ArtistaCrear},
    {path: 'artista/editar/:id', component: ArtistaEditar},
    
    {path: 'asiento', component: AsientosListar },
    {path: 'asiento/crear', component: AsientosCrear},
    {path: 'asiento/editar/:id', component: AsientoEditar},

    {path: 'auditorio', component: AuditorioListar },
    {path: 'auditorio/crear', component: AuditorioCrear},
    {path: 'auditorio/editar/:id', component: AuditorioEditar},

    
    {path: 'cliente', component: ClientesListar },
    {path: 'cliente/crear', component: ClientesCrear},
    {path: 'cliente/editar/:id', component: ClienteEditar},
    
    {path: 'entrada', component: EntradasListar },
    {path: 'entrada/crear', component: EntradasCrear},
    {path: 'entrada/editar/:id', component: EntradaEditar},

    {path: 'evento', component: EventoListar },
    {path: 'evento/crear', component: EventoCrear},
    {path: 'evento/editar/:id', component: EventoEditar},

    {path: 'eventos_artista', component: EventosArtistaListar },
    {path: 'eventos_artista/crear', component: EventosArtistaCrear},
    {path: 'eventos_artista/editar/:evento_id/:artista_id', component: EventosArtistaEditar},

    {path: 'pago', component: PagoListar },
    {path: 'pago/crear', component: PagoCrear},
    {path: 'pago/editar/:id', component: PagoEditar},

    {path: 'funcion', component: FuncionListar },
    {path: 'funcion/crear', component: FuncionCrear},
    {path: 'funcion/editar/:id', component: FuncionEditar},

    {path: 'seccion', component: SeccionListar },
    {path: 'seccion/crear', component: SeccionCrear},
    {path: 'seccion/editar/:id', component: SeccionEditar},

    {path: 'usuario', component: UsuarioListar },
    {path: 'usuario/crear', component: UsuarioCrear},
    {path: 'usuario/editar/:id', component: UsuarioEditar},
];
