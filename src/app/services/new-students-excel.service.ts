import { Injectable } from '@angular/core';
import {teacherFacade} from "../core/components/facade/teacher.facade";
import {CreationStudentResponse} from "../Models/creationStudentResponse.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  ResultCreationStudentsComponent
} from "../core/components/teacher/result-creation-students/result-creation-students.component";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewStudentsExcelService {
  correos:string[] = [];
  respuestas:CreationStudentResponse[] = [];
  dataResponse$: Observable<CreationStudentResponse[]> = new Observable<CreationStudentResponse[]>();
  constructor(
    private teacherFacade:teacherFacade,
    private dialog:MatDialog,
              ) { }
  responseRequest:CreationStudentResponse[] = [];

  addCorreo(correo:string){
    this.correos.push(correo);
  }

  setCorreos(correos:string[]){
    this.correos = correos;
  }

  cargarExcel(){
    this.teacherFacade.createNewStudent(this.correos).subscribe(response => {
      console.log(response);
      this.VisualizarRespuestas(response);
    })
  }

  VisualizarRespuestas(data:CreationStudentResponse[]){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = data;
    const dialogVal = this.dialog.open(ResultCreationStudentsComponent,dialogConfig);
    dialogVal.afterClosed().subscribe( res => {
      dialogVal.close();
    })
  }

  getData(){
    return this.dataResponse$;
  }
}
