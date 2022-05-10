import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";

@Injectable()

export class administrationState{
  private cuentasState$ = new BehaviorSubject<CrearCuentaModel[]>([]);

  cuentas$():Observable<CrearCuentaModel[]>{
    return this.cuentasState$.asObservable();
  }

  addCuenta(cuenta:CrearCuentaModel){
    this.cuentasState$.next([...this.cuentasState$.getValue(),cuenta])
  }

  removeCuenta(cuenta:CrearCuentaModel){
    let listaCuentas = this.cuentasState$.getValue().filter(cuentas => cuentas.email != cuentas.email);
    this.cuentasState$.next(listaCuentas);
  }

  setCuentas(cuentas:CrearCuentaModel[]){
    this.cuentasState$.next(cuentas);
  }

}
