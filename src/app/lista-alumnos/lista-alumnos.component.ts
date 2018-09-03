import { Component, OnInit, Inject } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
declare var jsPDF: any;




@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css'],
  providers: [{ provide: 'Window',  useValue: window }]
})
export class ListaAlumnosComponent implements OnInit {
  
  //var listado alumnos 
  listaAlumnos : {};

  constructor( @Inject('Window') private window: Window,private newService :CommonsService, private router: Router) { }

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

download() {
        var doc = new jsPDF('p', 'pt');
        var elem = document.getElementById("basic-table");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("reporteAlumnos.pdf");
}

}
