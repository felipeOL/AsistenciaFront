import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {Course} from "../../../Models/course.model";

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

  addCourse(course:Course):Observable<Course>
  {
    let usuario = this.authservice.getUser();
    return this.httpclient.post<Course>("http://localhost:5000/api/curso/crear", course, {
      headers: {
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getAllCourses(): Observable<Course[]>{
    let courseList: Course[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.get<Course[]>(AdminURL.GET_ALL_COURSES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
      }).subscribe(response => {
        response.forEach(course => {
          courseList.push(course);
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

  eliminarCuenta(cuenta:CrearCuentaModel){

  }

  deleteCourse(course:Course){}

  courseChange(course:Course){}



}
