import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {

  //var listado materia 
  listaMaterias : {};
    //var listado alumnos 
  listaAlumnos : {};	

  constructor(private newService :CommonsService, private router: Router) { }

  ngOnInit() {

  	this.getMaterias("todo");
  }

  getMaterias(item){
  	this.newService.getListMaterias(item)  
	  .subscribe(data =>  {  
	  	  this.listaMaterias = data; 
	  	  console.log(this.listaMaterias);  	     
	  }); 

  }

}
