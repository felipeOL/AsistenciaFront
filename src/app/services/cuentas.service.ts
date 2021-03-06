import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import {CrearCuentaModel} from "../Models/crearCuenta.model";
import {GetUsersModel} from "../Models/getUsers.model";
import {AuthenticationService} from "./authentication.service";
import {AdminURL} from "../Util/adminURL.model";

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private cuentas$ = new BehaviorSubject<GetUsersModel[]>([])
  private cuentas : GetUsersModel[]=[]
  private urlCrearCuenta =AdminURL.ACCOUNT_CREATION
  private urlTodosLosUsuarios=AdminURL.GET_ALL_COURSES
  constructor(
    private httpclient: HttpClient,
    private authservice: AuthenticationService,
  ) { }

  public registrarCuenta(nuevacuenta : CrearCuentaModel)
  {
    return this.httpclient.post(this.urlCrearCuenta,nuevacuenta,{})
  }

  public getAllCuentas(): BehaviorSubject<GetUsersModel[]>
  {
    this.actualizarServiceCuentas()
    return this.cuentas$
  }
  private actualizarServiceCuentas():void
  {
    let newArreglo:GetUsersModel[] =[]
    let usuario = this.authservice.getUser()
    console.log(usuario)
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
    console.log(newArreglo)
    this.cuentas = newArreglo
    this.cuentas$.next(this.cuentas)
  }
}
