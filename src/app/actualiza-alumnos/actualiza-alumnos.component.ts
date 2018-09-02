import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-actualiza-alumnos',
  templateUrl: './actualiza-alumnos.component.html',
  styleUrls: ['./actualiza-alumnos.component.css']
})
export class ActualizaAlumnosComponent implements OnInit {

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
	  this.newService.updateAlumnos(this.registerForm.value.id,this.registerForm.value.nombres, this.registerForm.value.apellidos,this.registerForm.value.direccion,this.registerForm.value.telefono,this.registerForm.value.curso,this.registerForm.value.documento)  
	  .subscribe(data =>  {  
	  	  this.listaAlumnos = data;  	  
	  	  	if(this.listaAlumnos == "Alumno actualizado"){
  	  		     this.msgex = "Alumno actualizado";
	  	    }else{
	  	    	 this.msg = "Error no se actualizo el alumno";
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
