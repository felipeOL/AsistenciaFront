import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {teacherFacade} from "../../facade/teacher.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  FormularioCrearCursosComponent
} from "../../administration/formulario-crear-cursos/formulario-crear-cursos.component";
import {
  FormularioAgregarEstudianteComponent
} from "../formulario-agregar-estudiante/formulario-agregar-estudiante.component";
import {FormularioCrearClaseComponent} from "../formulario-crear-clase/formulario-crear-clase.component";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns:string[] = ['codigo','id', 'nombre', 'sección', 'semestre','bloque','botonCrear'];
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
    const dialogVal = this.crearCuentaDialog.open(FormularioAgregarEstudianteComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
      {
        dialogVal.close();
      }
    )

  }

  crearCurso(){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    const dialogVal = this.crearCuentaDialog.open(FormularioCrearClaseComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
      {
        dialogVal.close();
      }
    )
  }

}
