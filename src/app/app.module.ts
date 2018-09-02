import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotasComponent } from './notas/notas.component';
import { MenuComponent } from './menu/menu.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';
import { ListaMateriasComponent } from './lista-materias/lista-materias.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { HeaderComponent } from './header/header.component';

import {CommonsService} from './commons.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { ActualizaAlumnosComponent } from './actualiza-alumnos/actualiza-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MateriasComponent,
    ProfesoresComponent,
    NotasComponent,
    MenuComponent,
    ListaAlumnosComponent,
    ListaProfesoresComponent,
    ListaMateriasComponent,
    ListaNotasComponent,
    HeaderComponent,
    ActualizaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [CommonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
