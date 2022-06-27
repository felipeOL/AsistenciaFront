import {Injectable} from "@angular/core";
import {administrationState} from "../state/administration.state";
import {administrationApi} from "../api/administration.api";
import {Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../Models/CrearCourse.model";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {PeriodModel} from "../../../Models/Period.model";
import {ErrorDialogComponent} from "../../../shared/components/dialogs/error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable()

export class administrationFacade{

  constructor(private adminState:administrationState,
              private adminApi:administrationApi,
              private dialog:MatDialog,
              ) {}

  get cuentas$():Observable<CrearCuentaModel[]>{
    return this.adminState.cuentas$();
  }

  get courses$():Observable<CourseResponseModel[]>{
    return this.adminState.courses$();
  }

  crearCuenta(cuenta:CrearCuentaModel){
    this.adminApi.registrarCuenta(cuenta).subscribe({next:(respuesta) => {
        this.adminState.addCuenta(cuenta);
      },error:(err) => {
        console.log();
    }})
  }

  crearCurso(curso:CrearCourseModel): any {
    this.adminApi.addCourse(curso).subscribe({
      next: (respuesta) => {
        this.updateCourse();
      }, error: (err) => {
        console.log();
      }
    })
  }

  eliminarCuenta(cuenta:CrearCuentaModel){
    this.adminApi.eliminarCuenta(cuenta);
    this.adminState.removeCuenta(cuenta);
  }

  eliminarCurso(curso:CrearCourseModel){
    this.adminApi.deleteCourse(curso);
    this.adminState.removeCourses(curso);
  }

  updateCuentas(){
    this.adminApi.obtenerCuentas().subscribe(cuenta => {
      this.adminState.setCuentas(cuenta);
    })
  }

  updateCuentasProfesor(){
    this.adminApi.obtenerCuentasProfesor().subscribe(cuenta => {
      this.adminState.setCuentas(cuenta);
    })
  }

  updateCourse(){
    this.adminApi.getAllCourses().subscribe(curso => {
      this.adminState.setCourses(curso);
    })
  }

  getPeriodosActuales(year: number)
  {

    this.adminApi.getCurrentPeriods(year).subscribe(res=>
      {
        console.log(res)
        this.adminState.setPeriodos(res)
      }
    )
  }

  suscribePeriodos$()
  {
    return this.adminState.getPeriod$()
  }

  createPeriod(newPeriod: PeriodModel)
  {
      this.adminApi.CreatePeriod(newPeriod).subscribe(response => {
        this.dialog.open(ErrorDialogComponent, {
          data:
            {
              titulo: "Periodo Creado",
              contenido: "el periodo fue creado exitosamente "
            }
        })
      })
  }

}

