import { Injectable } from '@angular/core';
import {teacherFacade} from "../core/components/facade/teacher.facade";
import {CreationStudentResponse} from "../Models/creationStudentResponse.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  ResultCreationStudentsComponent
} from "../core/components/teacher/result-creation-students/result-creation-students.component";

@Injectable({
  providedIn: 'root'
})
export class NewStudentsExcelService {
  correos:string[] = [];
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
      this.responseRequest.push(response);
    })
    this.VisualizarRespuestas()
  }

  VisualizarRespuestas(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data = this.responseRequest;
    const dialogVal = this.dialog.open(ResultCreationStudentsComponent,dialogConfig);
    dialogVal.afterClosed().subscribe( res => {
      dialogVal.close();
    })
  }
}
