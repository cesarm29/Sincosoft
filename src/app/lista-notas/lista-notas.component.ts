import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
declare var jsPDF: any;

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
  	this.newService.getListNotasInner(item)  
	  .subscribe(data =>  {  
	  	  this.listaNotas = data; 
	  	  console.log(this.listaNotas);  	     
	  }); 

  }

  download() {
        var doc = new jsPDF('p', 'pt');
        var elem = document.getElementById("basic-table");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("reporteNotas.pdf");
  }


}
