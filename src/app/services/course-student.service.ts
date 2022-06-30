import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {CourseResponseModel} from "../Models/CourseResponse.model";
import {teacherFacade} from "../core/components/facade/teacher.facade";
import {OkDialogComponent} from "../shared/components/dialogs/ok-dialog/ok-dialog.component";
import {MatDialog} from "@angular/material/dialog";

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

  constructor(private teacherFacade:teacherFacade,private dialog: MatDialog) {
    this.correos$ = this.correosObtenidos$();
    this.curso = {};
  }

  addCorreo(correo:string){
    console.log("se agrego correo:",correo);
    this.correosEstudiantes$.next([...this.correosEstudiantes$.getValue(),correo]);
  }

  setCorreos(correos:string[]){
    this.correosEstudiantes$.next(correos);
  }

  obtenerCurso(cursoObtenido:CourseResponseModel){
    this.curso = cursoObtenido;
  }

  cargarExcel(){
    this.correos = [];
    this.correos$ = this.correosObtenidos$();
    this.correos$.subscribe(res => {
      res.forEach(correo => {
        if(!this.correos.includes(correo)){
          console.log("this.correos:",this.correos);
          this.correos.push(correo);
          this.teacherFacade.addStudenToCourse(this.curso.id!,correo);
        }
      })
    })
    this.dialog.open(OkDialogComponent, {
      data:
        {
          titulo: "Carga Completada",
          contenido: "Los estudiantes fueron cargados exitosamente"
        }
    })
    this.setCorreos([]);
  }
}
