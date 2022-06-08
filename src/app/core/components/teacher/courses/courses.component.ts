import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {teacherFacade} from "../../facade/teacher.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  FormularioAgregarEstudianteComponent
} from "../formulario-agregar-estudiante/formulario-agregar-estudiante.component";
import {FormularioCrearClaseComponent} from "../formulario-crear-clase/formulario-crear-clase.component";
import {CourseStudentService} from "../../../../services/course-student.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns:string[] = ['codigo','id', 'nombre', 'sección', 'semestre','bloque','botonCrear','botonAgregarEstudiante','botonAgregarExcel'];
  dataSource$:Observable<CourseResponseModel[]>
  correos$:Observable<string[]>
  correos:string[] = [];
  constructor
  (
    private teacherFacade: teacherFacade,
    private crearCuentaDialog: MatDialog,
    private excelService:CourseStudentService
  )
  {
    this.correos$ = this.excelService.correos$();
    this.dataSource$ = this.teacherFacade.courses$;
    this.teacherFacade.updateCourse();
    console.log(this.dataSource$);
  }

  ngOnInit(): void
  {

  }

  public addStudent(curso:CourseResponseModel): void
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      idCurso: curso.id
    };
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

  crearCurso(curso: CourseResponseModel){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    dialogConfig.data={
      // @ts-ignore
      idCurso: curso.id,
      // @ts-ignore
      bloque: curso.bloque,
    }
    const dialogVal = this.crearCuentaDialog.open(FormularioCrearClaseComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
      {
        dialogVal.close();
      }
    )
  }

  cargarExcel(curso:CourseResponseModel){
    this.correos = [];
    this.correos$.subscribe(res => {
      res.forEach(correo => {
        if(!this.correos.includes(correo)){
          this.correos.push(correo);
          this.teacherFacade.addStudenToCourse(curso.id!,correo);
        }else{
        }
      })
    })
  }

}
