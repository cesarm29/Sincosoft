import { Component, OnInit } from '@angular/core';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  
declare var jsPDF: any;


@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {
  msg:string = '';
  msgex:string = '';
  //var listado profesores 
  listaProfesores : {};
   lista : {};	

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


 eliminar(id){

  if (confirm("Esta seguro de eliminar este profesor!")) {
   

    this.newService.deleteProfesores(id)  
    .subscribe(data =>  {  
        this.lista = data;
        if(this.lista == "Profesor eliminado"){
               this.msgex = "Profesor eliminado";
               this.router.navigate(["/listaProfesores"]);
          }else{
               this.msg = "Error no se elimino el profesor";
          }         
    }); 

} else {
    
}

 }

 closeAlert():void {
    this.msg = '';
  }

  closeAlertEx():void {
    this.msgex = '';
  } 

  close(){
    //se redirecciona al menu
    this.router.navigate(["/"]);
  } 

    download() {
        var doc = new jsPDF('p', 'pt');
        var elem = document.getElementById("basic-table");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("reporteProfesores.pdf");
  }




}

