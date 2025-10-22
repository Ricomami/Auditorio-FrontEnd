import { Routes } from '@angular/router';
import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';
import {UsuarioListar} from './usuario/usuario-listar/usuario-listar'
import {UsuarioCrear} from './usuario/usuario-crear/usuario-crear'

export const routes: Routes = [
    {path: 'auditorio', component: AuditorioListar },
    {path: 'auditorio/crear', component: AuditorioCrear},
    {path: 'usuario', component: UsuarioListar },
    {path: 'usuario/crear', component: UsuarioCrear}
];
