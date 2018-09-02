import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit {

  //var listado notas 
  listaNotas : {};

  constructor(private newService :CommonsService, private router: Router) { }

  ngOnInit() {
  	this.getNotas("todo");
  }

  getNotas(item){
  	this.newService.getListNotas(item)  
	  .subscribe(data =>  {  
	  	  this.listaNotas = data; 
	  	  console.log(this.listaNotas);  	     
	  }); 

  }

}
