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

@Injectable()

export class administrationApi {

  constructor(private httpclient: HttpClient,
              private authservice: AuthenticationService,) {
  }

  registrarCuenta(nuevacuenta: CrearCuentaModel){
    return this.httpclient.post(AdminURL.ACCOUNT_CREATION, nuevacuenta, {}).pipe(
      catchError(err => "e")
    )
  }

  addCourse(course:CrearCourseModel):Observable<CrearCourseModel>
  {
    let usuario = this.authservice.getUser();
    return this.httpclient.post<CrearCourseModel>("http://localhost:5000/api/curso/crear", course, {
      headers: {
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getAllCourses(): Observable<CourseResponseModel[]>{
    let courseList: CourseResponseModel[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.get<CourseResponseModel[]>(AdminURL.GET_ALL_COURSES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
      }).subscribe(response => {
        response.forEach(course => {
            let nuevoCurso: CourseResponseModel = {
              id: course.id,
              codigo: course.codigo,
              nombre: course.nombre,
              seccion: course.seccion,
              semestre: course.semestre,
              bloque: course.bloque,
              anio: course.anio,
              profesor: course.profesor
            }
            courseList.push(nuevoCurso)
        })
      }
    )
    return of(courseList);
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



}
