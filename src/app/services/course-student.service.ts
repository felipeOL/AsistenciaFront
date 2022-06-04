import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  correosEstudiantes: string[] = [];

  constructor() { }

  addCorreo(correo:string){
    this.correosEstudiantes.push(correo);
  }

  getCorreos():Observable<string[]>{
    return of(this.correosEstudiantes);
  }

  cantidadCorreos(){
    console.log(this.correosEstudiantes.length);
  }
}
