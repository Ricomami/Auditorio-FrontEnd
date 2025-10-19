import { Routes } from '@angular/router';
import {AuditorioCrear} from  './auditorio/auditorio-crear/auditorio-crear';
import {AuditorioListar} from  './auditorio/auditorio-listar/auditorio-listar';

export const routes: Routes = [
    {path: 'auditorio', component: AuditorioListar },
    {path: 'auditorio/crear', component: AuditorioCrear}
];
