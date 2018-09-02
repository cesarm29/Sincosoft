import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  msg:string = '';
  msgex:string = '';
  registerForm: FormGroup;
  submitted = false;
  //var listado alumnos 
  listaAlumnos : {};

  constructor(private formBuilder: FormBuilder, private newService :CommonsService, private router: Router) { }

  ngOnInit() {

  	this.registerForm = this.formBuilder.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            documento: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['', Validators.required],
            curso: ['', Validators.required]
        });

  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
       return;
    }else{
	  this.newService.createAlumnos(this.registerForm.value.nombres, this.registerForm.value.apellidos,this.registerForm.value.direccion,this.registerForm.value.telefono,this.registerForm.value.curso,this.registerForm.value.documento)  
	  .subscribe(data =>  {  
	  	  this.listaAlumnos = data;  	  
	  	  	if(this.listaAlumnos == "Alumno insertado"){
  	  		     this.msgex = "Alumno insertado";
	  	    }else{
	  	    	 this.msg = "Error no se inserto el alumno";
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
