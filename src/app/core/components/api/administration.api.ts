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

  obtenerCuentas(): Observable<CrearCuentaModel[]> {
    let newArreglo:CrearCuentaModel[] =[];
    let usuario = this.authservice.getUser()
    console.log(usuario)
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

  addCourse(course:Course){

  }

  getAllCourses(){

  }

  courseChange(course:Course){

  }



}
