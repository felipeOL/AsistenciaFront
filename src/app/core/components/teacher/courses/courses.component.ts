import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {teacherFacade} from "../../facade/teacher.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns:string[] = ['codigo',"id", 'nombre', 'sección', 'semestre','bloque'];
  dataSource$:Observable<CourseResponseModel[]>
  constructor
  (
    private teacherFacade: teacherFacade,
    private crearCuentaDialog: MatDialog,
  )
  {
    this.dataSource$ = this.teacherFacade.courses$;
    this.teacherFacade.updateCourse();
    console.log(this.dataSource$);
  }

  ngOnInit(): void
  {

  }

  public addStudent(): void
  {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";

  }

}
