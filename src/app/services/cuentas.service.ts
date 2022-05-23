import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {CrearCuentaModel} from "../Models/crearCuenta.model";
import {GetUsersModel} from "../Models/getUsers.model";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private cuentas$ = new BehaviorSubject<GetUsersModel[]>([])
  private cuentas : GetUsersModel[]=[]
  private urlCrearCuenta ="http://localhost:5000/api/usuario/registrar"
  private urlTodosLosUsuarios="http://localhost:5000/api/usuario/todos"
  constructor(
    private httpclient: HttpClient,
    private authservice: AuthenticationService,
  ) { }

  public registrarCuenta(nuevacuenta : CrearCuentaModel): Observable<any>
  {
    return this.httpclient.post(this.urlCrearCuenta,nuevacuenta,{}).pipe(
      catchError(err => this.getlogineror(err))
    )
  }

  private getlogineror(error: HttpErrorResponse):string {
    return "e"
  }

  public getAllCuentas(): BehaviorSubject<GetUsersModel[]>
  {
    this.actualizarServiceCuentas()
    return this.cuentas$
  }
  public actualizarServiceCuentas():void
  {
    let newArreglo:GetUsersModel[] =[]
    let usuario = this.authservice.getUser()
    this.httpclient.get<GetUsersModel[]>(this.urlTodosLosUsuarios, {
      headers: {
        accept: 'application/json',
        Authorization:'Bearer '+usuario.token
      }
    }).subscribe(
      (data:GetUsersModel[])=>
      {
        data.forEach((dato:GetUsersModel)=>{
          const newCuentas: GetUsersModel = {
            email : dato.email,
            nombre : dato.nombre,
            rut : dato.rut,
            rol :dato.rol
          }
          newArreglo.push(newCuentas)
        })

      }
    )
    this.cuentas = newArreglo
    this.cuentas$.next(this.cuentas)
  }
}
