import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {CrearCourseModel} from "../../../Models/CrearCourse.model";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {ProferoResposeModel} from "../../../Models/ProferoRespose.model";
import {PeriodModel} from "../../../Models/Period.model";
import {PeriodResponseModel} from "../../../Models/PeriodResponse.model";

@Injectable()

export class administrationApi {

  constructor(private httpclient: HttpClient,
              private authservice: AuthenticationService,) {
  }

  registrarCuenta(nuevacuenta: CrearCuentaModel)
  {
    let response= this.httpclient.post(AdminURL.ACCOUNT_CREATION, nuevacuenta, )
    console.log("response")
    console.log(response)
    return response
  }

  addCourse(course:CrearCourseModel):Observable<CrearCourseModel>
  {
    console.log(course)
    let usuario = this.authservice.getUser();
    return this.httpclient.post<CrearCourseModel>(AdminURL.COURSES_CREATION, course, {
      headers: {
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getAllCourses(): Observable<CourseResponseModel[]>{
    let usuario = this.authservice.getUser();
    return this.httpclient.get<CourseResponseModel[]>(AdminURL.GET_ALL_COURSES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
      })
  }

  obtenerCuentas(): Observable<CrearCuentaModel[]> {
    let newArreglo:CrearCuentaModel[] =[];
    let usuario = this.authservice.getUser()
    this.httpclient.get<CrearCuentaModel[]>(AdminURL.GET_ALL_ACCOUNT, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(
      (data: CrearCuentaModel[]) => {
        data.forEach((dato:CrearCuentaModel)=>{
          const newCuentas: CrearCuentaModel = {
            email : dato.email,
            nombre : dato.nombre,
            rut : dato.rut,
            rol :dato.rol
          }
          newArreglo.push(newCuentas)
        })
      }
    )
    return of(newArreglo);
  }

  obtenerCuentasProfesor(): Observable<CrearCuentaModel[]> {
    let newArreglo:CrearCuentaModel[] =[];
    let usuario = this.authservice.getUser()
    this.httpclient.get<CrearCuentaModel[]>(AdminURL.GET_ALL_ACCOUNT, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(
      (data: any[]) => {
        data.forEach((dato:any)=>{
          const newCuentas: any = {
            email : dato.email,
            nombre : dato.nombre,
            rut : dato.rut,
            rol :dato.rol
          }
          if(newCuentas.rol == "Teacher"){
            newArreglo.push(newCuentas)
          }
        })
      }
    )
    return of(newArreglo);
  }

  eliminarCuenta(cuenta:CrearCuentaModel){

  }

  deleteCourse(course:CrearCourseModel){}

  courseChange(course:CrearCourseModel){}

  getCurrentPeriods(year:number): Observable<PeriodResponseModel[]>
  {
    let usuario = this.authservice.getUser();
    return this.httpclient.post<PeriodResponseModel[]>(AdminURL.GET_PERIOD_OF_THE_YEAR, year, {
      headers: {
        Authorization: 'Bearer ' + usuario.token
      }
    })

  }

  CreatePeriod(period: PeriodModel)
  {
    let usuario = this.authservice.getUser();
    return this.httpclient.post<PeriodModel>(AdminURL.CREATE_PERIOD, period, {
      headers: {
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }



}
