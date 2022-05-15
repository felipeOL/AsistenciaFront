import {Injectable} from "@angular/core";
import {administrationState} from "../state/administration.state";
import {administrationApi} from "../api/administration.api";
import {Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {Course} from "../../../Models/course.model";

@Injectable()

export class administrationFacade{

  constructor(private adminState:administrationState,
              private adminApi:administrationApi,
              ) {}

  get cuentas$():Observable<CrearCuentaModel[]>{
    return this.adminState.cuentas$();
  }

  get courses$():Observable<Course[]>{
    return this.adminState.courses$();
  }

  crearCuenta(cuenta:CrearCuentaModel){
    this.adminApi.registrarCuenta(cuenta);
    this.adminState.addCuenta(cuenta);
  }

  crearCurso(curso:Course): any{
    let respose = this.adminApi.addCourse(curso).subscribe( algo => {
      console.log(algo)
    });
    this.adminState.addCourses(curso);
    return respose
  }

  eliminarCuenta(cuenta:CrearCuentaModel){
    this.adminApi.eliminarCuenta(cuenta);
    this.adminState.removeCuenta(cuenta);
  }

  eliminarCurso(curso:Course){
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

}

