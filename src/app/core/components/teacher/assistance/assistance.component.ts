import { Component, OnInit } from '@angular/core';
import {teacherFacade} from "../../facade/teacher.facade";
import {Observable} from "rxjs";
import {classReponse} from "../../../../Models/classReponse.model";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioCrearClaseComponent} from "../formulario-crear-clase/formulario-crear-clase.component";
import {MarkAttendanceTeacherComponent} from "../mark-attendance-teacher/mark-attendance-teacher.component";

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {

  fechaActual: Date = new Date();
  clases$:Observable<classReponse[]>
  displayedColumns:string[] = ['curso','sala', 'modalidad', 'bloque', 'fecha','btnAsistencia'];
  constructor(
    private teacherFacade: teacherFacade,
    private dialog: MatDialog,
  ) {
    this.clases$ = this.teacherFacade.clases$;
    this.teacherFacade.getAllClass(this.fechaActual);

  }

  ngOnInit(): void
  {

  }

  verAsistencia (id:number):void {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "40%";
    dialogConfig.data =id;
    const dialogVal = this.dialog.open(MarkAttendanceTeacherComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
      {
        dialogVal.close();
      }
    )
  }

}
