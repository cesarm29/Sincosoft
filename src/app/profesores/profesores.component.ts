import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CommonsService} from '../commons.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  msg:string = '';
  msgex:string = '';
  registerForm: FormGroup;
  submitted = false;
  //var listado profesores 
  listaProfesores : {};	

  constructor(private formBuilder: FormBuilder, private newService :CommonsService, private router: Router) { }

  ngOnInit() {
  	this.registerForm = this.formBuilder.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            documento: ['', Validators.required],
            direccion: ['', Validators.required],
            telefono: ['', Validators.required]
        });
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
       return;
    }else{
	  this.newService.createProfesores(this.registerForm.value.nombres, this.registerForm.value.apellidos,this.registerForm.value.direccion,this.registerForm.value.telefono,this.registerForm.value.documento)  
	  .subscribe(data =>  {  
	  	  this.listaProfesores = data;  	  
	  	  	if(this.listaProfesores == "Profesor insertado"){
  	  		     this.msgex = "Profesor insertado";
	  	    }else{
	  	    	 this.msg = "Error no se inserto el profesor";
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
