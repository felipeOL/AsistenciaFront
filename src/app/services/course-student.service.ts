import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {CourseResponseModel} from "../Models/CourseResponse.model";
import {teacherFacade} from "../core/components/facade/teacher.facade";
import {CreationStudentResponse} from "../Models/creationStudentResponse.model";
import {MatDialogConfig} from "@angular/material/dialog";
import {
  ResultCreationStudentsComponent
} from "../core/components/teacher/result-creation-students/result-creation-students.component";

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  private correosEstudiantes$ = new BehaviorSubject<string[]>([])
  correos:string[] = [];
  correos$:Observable<string[]>
  curso:CourseResponseModel;

  correosObtenidos$():Observable<string[]>{
    return this.correosEstudiantes$.asObservable();
  }

  constructor(private teacherFacade:teacherFacade) {
    this.correos$ = this.correosObtenidos$();
    this.curso = {};
  }

  addCorreo(correo:string){
    console.log("se agrego correo:",correo);
    this.correos.push(correo)
    this.correosEstudiantes$.next([...this.correosEstudiantes$.getValue(),correo]);
  }

  setCorreos(correos:string[]){
    this.correosEstudiantes$.next(correos);
  }

  obtenerCurso(cursoObtenido:CourseResponseModel){
    this.curso = cursoObtenido;
  }

  cargarExcel(){
    console.log("aajjaaja")
    console.log(this.correos)
    console.log(this.curso)
    if(typeof this.curso.id != 'undefined')
    {
      this.teacherFacade.cargarEstudiantesCurso(this.curso.id,this.correos)
    }

  }

  resetCorreos()
  {
    this.correos =[]
    this.correosEstudiantes$.next(this.correos)
  }

}
