import {Injectable} from "@angular/core";
import {administrationState} from "../state/administration.state";
import {administrationApi} from "../api/administration.api";
import {Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../Models/CrearCourse.model";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";

@Injectable()

export class administrationFacade{

  constructor(private adminState:administrationState,
              private adminApi:administrationApi,
              ) {}

  get cuentas$():Observable<GetUsersModel[]>{
    return this.adminState.cuentas$();
  }

  get courses$():Observable<CourseResponseModel[]>{
    return this.adminState.courses$();
  }

  crearCuenta(cuenta:CrearCuentaModel){
    this.adminApi.registrarCuenta(cuenta);
    let roll ='Student'
    if(cuenta.rol==1)
    {
      roll ='Teacher'
    }
    else if(cuenta.rol==2)
    {
      roll ='Admin'
    }
    let nuevaCuenta: GetUsersModel =
      {
        email: cuenta.email,
        nombre: cuenta.nombre,
        rut: cuenta.rut,
        rol: roll
      }
    this.adminState.addCuenta(nuevaCuenta);
  }

  crearCurso(curso:CrearCourseModel): any{
    let respose = this.adminApi.addCourse(curso).subscribe( algo => {
      console.log(algo)
    });
    this.updateCourse()
    return respose
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

}

