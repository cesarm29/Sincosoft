import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  


@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  //var listado profesores 
  listaProfesores : {};	

  constructor(private newService :CommonsService, private router: Router) { }

  ngOnInit() {
  	this.getProfesores("todo");
  }

   getProfesores(item){
  	this.newService.getListProfesores(item)  
	  .subscribe(data =>  {  
	  	  this.listaProfesores = data; 
	  	  console.log(this.listaProfesores);  	     
	  }); 

  }

}

