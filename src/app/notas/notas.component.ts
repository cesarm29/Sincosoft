import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  msg:string = '';
  msgex:string = '';
  notasForm: FormGroup;
  submitted = false;
  //var listado materia 
  listaMaterias : {};
   //var listado alumnos 
  listaAlumnos : {};
   //var listado notas 
  listaNotas : {};	

  constructor(private formBuilder: FormBuilder,private newService :CommonsService, private router: Router) { }

  ngOnInit() {
  	this.getMaterias("todo");
  	this.getAlumnos("todo");

  	this.notasForm = this.formBuilder.group({
            valor: ['', Validators.required],
            fecha: ['', Validators.required],
            alumno: ['', Validators.required],
            materia: ['', Validators.required]
        });
  }

   getMaterias(item){
  	this.newService.getListMaterias(item)  
	  .subscribe(data =>  {  
	  	  this.listaMaterias = data; 
	  	  console.log(this.listaMaterias);  	     
	  }); 
  }

   getAlumnos(item){
  	this.newService.getListAlumnos(item)  
	  .subscribe(data =>  {  
	  	  this.listaAlumnos = data; 
	  	  console.log(this.listaAlumnos);  	     
	  }); 

  }

  get f() { return this.notasForm.controls; }


    onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.notasForm.invalid) {
       return;
    }else{
	  this.newService.createNotas(this.notasForm.value.valor, this.notasForm.value.fecha,this.notasForm.value.alumno,this.notasForm.value.materia)  
	  .subscribe(data =>  {  
	  	  this.listaNotas = data;  	  
	  	  	if(this.listaNotas == "Nota insertada"){
  	  		     this.msgex = "Nota insertada";
	  	    }else{
	  	    	 this.msg = "Error no se inserto la nota";
	  	    }  	     
	  }); 
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


 




}
