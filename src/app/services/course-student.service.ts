import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseStudentService {

  private correosEstudiantes$ = new BehaviorSubject<string[]>([])

  correos$():Observable<string[]>{
    return this.correosEstudiantes$.asObservable();
  }

  constructor() { }

  addCorreo(correo:string){
    console.log("se agrego correo:",correo);
    this.correosEstudiantes$.next([...this.correosEstudiantes$.getValue(),correo]);
  }

  setCorreos(correos:string[]){
    this.correosEstudiantes$.next(correos);
  }
}
