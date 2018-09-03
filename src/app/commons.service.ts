import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

@Injectable()
export class CommonsService {

  constructor(private http: Http) { }


//service to mysql get alumnos all
  getListAlumnos(item){      
    return this.http.get('http://localhost:3000/getAlumnos/', item)  
            .map((response: Response) =>response.json())              
  }

 //service to mysql send alumnos to save
  createAlumnos(nombre, apellido, direccion, telefono, curso, documento){ 
    var body = {
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono,
    "curso": curso,
    "documento": documento
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/createAlumnos/', body, options)  
            .map((response: Response) =>response.json())              
  }

//service to mysql update alumnos 
  updateAlumnos(id,nombre, apellido, direccion, telefono, curso, documento){ 
    var body = {
    "id": id,	
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono,
    "curso": curso,
    "documento": documento
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.put('http://localhost:3000/updateAlumnos/', body, options)  
            .map((response: Response) =>response.json())              
  }


  //service to mysql delete alumnos 
  deleteAlumnos(id){ 
    var body = {
    "id": id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/deleteAlumnos/', body, options)  
            .map((response: Response) =>response.json())              
  }




  //service to mysql get profesores all
  getListProfesores(item){      
    return this.http.get('http://localhost:3000/getProfesores/', item)  
            .map((response: Response) =>response.json())              
  }

 //service to mysql send profesores to save
  createProfesores(nombre, apellido, direccion, telefono, documento){ 
    var body = {
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono,
    "documento": documento
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/createProfesores/', body, options)  
            .map((response: Response) =>response.json())              
  }

//service to mysql update profesores 
  updateProfesores(id,nombre, apellido, direccion, telefono,  documento){ 
    var body = {
    "id": id,	
    "nombre": nombre,
    "apellido": apellido,
    "direccion": direccion,
    "telefono": telefono,
    "documento": documento
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.put('http://localhost:3000/updateProfesores/', body, options)  
            .map((response: Response) =>response.json())              
  }


  //service to mysql delete profesores 
  deleteProfesores(id){ 
    var body = {
    "id": id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/deleteProfesores/', body, options)  
            .map((response: Response) =>response.json())              
  }





  //service to mysql get materias all
  getListMaterias(item){      
    return this.http.get('http://localhost:3000/getMaterias/', item)  
            .map((response: Response) =>response.json())              
  }

   //service to mysql get materias all
  getListMateriasInner(item){      
    return this.http.get('http://localhost:3000/getMateriasInner/', item)  
            .map((response: Response) =>response.json())              
  }

 //service to mysql send materias to save
  createMaterias(nombre, descripcion, alumnos_id, profesores_id){ 
    var body = {
    "nombre": nombre,
    "descripcion": descripcion,
    "alumnos_id": alumnos_id,
    "profesores_id": profesores_id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/createMaterias/', body, options)  
            .map((response: Response) =>response.json())              
  }

//service to mysql update materias 
  updateMaterias(id,nombre, descripcion, alumnos_id, profesores_id){ 
    var body = {
    "id": id,	
    "nombre": nombre,
    "descripcion": descripcion,
    "alumnos_id": alumnos_id,
    "profesores_id": profesores_id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/updateMaterias/', body, options)  
            .map((response: Response) =>response.json())              
  }


  //service to mysql delete materias 
  deleteMaterias(id){ 
    var body = {
    "id": id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/deleteMaterias/', body, options)  
            .map((response: Response) =>response.json())              
  }





  //service to mysql get notas all
  getListNotas(item){      
    return this.http.get('http://localhost:3000/getNotas/', item)  
            .map((response: Response) =>response.json())              
  }

   //service to mysql get notas all
  getListNotasInner(item){      
    return this.http.get('http://localhost:3000/getNotasInner/', item)  
            .map((response: Response) =>response.json())              
  }

 //service to mysql send notas to save
  createNotas(valor, fecha,alumnos_id, materias_id){ 
    var body = {
    "valor": valor,
    "fecha": fecha,
    "alumnos_id": alumnos_id,
    "materias_id": materias_id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/createNotas/', body, options)  
            .map((response: Response) =>response.json())              
  }

//service to mysql update notas 
  updateNotas(id,valor, fecha,alumnos_id, materias_id){ 
    var body = {
   "id": id,
   "valor": valor,
    "fecha": fecha,
    "alumnos_id": alumnos_id,
    "materias_id": materias_id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/updateNotas/', body, options)  
            .map((response: Response) =>response.json())              
  }


  //service to mysql delete notas 
  deleteNotas(id){ 
    var body = {
    "id": id
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); 
    return this.http.post('http://localhost:3000/deleteNotas/', body, options)  
            .map((response: Response) =>response.json())              
  }









}
