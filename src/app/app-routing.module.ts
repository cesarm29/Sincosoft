import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { NotasComponent } from './notas/notas.component';
import { MenuComponent } from './menu/menu.component';

import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { ListaMateriasComponent } from './lista-materias/lista-materias.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { ActualizaAlumnosComponent } from './actualiza-alumnos/actualiza-alumnos.component';


//const routes
const routes: Routes = [
		{
            path: '',
            component: MenuComponent,
        },
        {
            path: 'alumnos',
            component: AlumnosComponent,
        },
        {
            path: 'materias',
            component: MateriasComponent,
        },
        {
            path: 'profesores',
            component: ProfesoresComponent,
        },
        {
            path: 'notas',
            component: NotasComponent,
        },
        {
            path: 'listaAlumnos',
            component: ListaAlumnosComponent,
        },
        {
            path: 'listaProfesores',
            component: ListaProfesoresComponent,
        },
        {
            path: 'listaMaterias',
            component: ListaMateriasComponent,
        },
        {
            path: 'listaNotas',
            component: ListaNotasComponent,
        },
        {
            path: 'actualizaAlumnos',
            component: ActualizaAlumnosComponent,
        }
    ];


    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
