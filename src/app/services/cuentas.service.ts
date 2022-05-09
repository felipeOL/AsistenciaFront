import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CrearCuentaModel} from "../Models/crearCuenta.model";

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  private urlCrearCuenta ="http://localhost:5000/api/usuario/registrar"
  constructor(
    private httpclient: HttpClient
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
}
