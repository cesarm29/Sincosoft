import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  msg:string = '';
  msgex:string = '';
  materiasForm: FormGroup;
  submitted = false;
   //var listado alumnos 
  listaAlumnos : {};
    //var listado profesores 
  listaProfesores : {};
    //var listado materias 
  listaMaterias : {};


  constructor(private formBuilder: FormBuilder,private newService :CommonsService, private router: Router) { }

  ngOnInit() {
  	this.getAlumnos("todo");
  	this.getProfesores("todo");

  	this.materiasForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            descripcion: ['', Validators.required],
            alumno: ['', Validators.required],
            profesor: ['', Validators.required]
        });
  }

    getAlumnos(item){
  	this.newService.getListAlumnos(item)  
	  .subscribe(data =>  {  
	  	  this.listaAlumnos = data; 
	  	  console.log(this.listaAlumnos);  	     
	  }); 

  }

    getProfesores(item){
  	this.newService.getListProfesores(item)  
	  .subscribe(data =>  {  
	  	  this.listaProfesores = data; 
	  	  console.log(this.listaProfesores);  	     
	  }); 

  }

  get f() { return this.materiasForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.materiasForm.invalid) {
       return;
    }else{
	  this.newService.createMaterias(this.materiasForm.value.nombre, this.materiasForm.value.descripcion,this.materiasForm.value.alumno,this.materiasForm.value.profesor)  
	  .subscribe(data =>  {  
	  	  this.listaMaterias = data;  	  
	  	  	if(this.listaMaterias == "Materia insertada"){
  	  		     this.msgex = "Materia insertada";
	  	    }else{
	  	    	 this.msg = "Error no se inserto la materia";
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
