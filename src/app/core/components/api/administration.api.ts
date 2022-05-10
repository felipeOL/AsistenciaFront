import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";

@Injectable()

export class administrationApi {

  private urlCrearCuenta = "http://localhost:5000/api/usuario/registrar";
  private urlTodosLosUsuarios = "http://localhost:5000/api/usuario/todos";

  constructor(private httpclient: HttpClient,
              private authservice: AuthenticationService,) {
  }

  registrarCuenta(nuevacuenta: CrearCuentaModel): Observable<any> {
    return this.httpclient.post(this.urlCrearCuenta, nuevacuenta, {}).pipe(
      catchError(err => "e")
    )
  }

  obtenerCuentas(): Observable<CrearCuentaModel[]> {
    let newArreglo:CrearCuentaModel[] =[];
    let usuario = this.authservice.getUser()
    console.log(usuario)
    this.httpclient.get<CrearCuentaModel[]>(this.urlTodosLosUsuarios, {
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

}
