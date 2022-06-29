import { Injectable } from '@angular/core';
import {teacherFacade} from "../core/components/facade/teacher.facade";

@Injectable({
  providedIn: 'root'
})
export class NewStudentsExcelService {
  correos:string[] = [];
  constructor(private teacherFacade:teacherFacade) { }

  addCorreo(correo:string){
    this.correos.push(correo);
  }

  setCorreos(correos:string[]){
    this.correos = correos;
  }

  cargarExcel(){
    this.teacherFacade.createNewStudent(this.correos).subscribe(response => {
      console.log(response);
    })
  }
}
