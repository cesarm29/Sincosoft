import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  //var listado alumnos 
  listaAlumnos : {};	

  constructor(private newService :CommonsService, private router: Router) { }

  ngOnInit() {

  	this.getAlumnos("todo");
  }

  getAlumnos(item){
  	this.newService.getListAlumnos(item)  
	  .subscribe(data =>  {  
	  	  this.listaAlumnos = data; 
	  	  console.log(this.listaAlumnos);  	     
	  }); 

  }

  Actualizar(id,nombre,apellido,documento,direccion,telefono,curso){
     //almacenamos en storage
    localStorage.setItem('IdAlumno', id);
    localStorage.setItem('NombreAlumno', nombre);
    localStorage.setItem('ApellidoAlumno', apellido);
    localStorage.setItem('DocumentoAlumno', documento);
    localStorage.setItem('DireccionAlumno', direccion);
    localStorage.setItem('TelefonoAlumno', telefono);
    localStorage.setItem('CursoAlumno', curso);
   //se redirecciona al menu
    this.router.navigate(["/actualizaAlumnos"]);
}

}
