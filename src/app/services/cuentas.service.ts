import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {CrearCuentaModel} from "../Models/crearCuenta.model";

@Injectable({
  providedIn: 'root'
})
export class CuentasService {

  constructor() { }

  public registrarCuenta(nuevacuenta : CrearCuentaModel): string
  {
    return "a"
  }
}
