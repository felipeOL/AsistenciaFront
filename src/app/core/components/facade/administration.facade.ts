import {Injectable} from "@angular/core";
import {administrationState} from "../state/administration.state";
import {administrationApi} from "../api/administration.api";
import {Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";

@Injectable()

export class administrationFacade{

  constructor(private adminState:administrationState,
              private adminApi:administrationApi,
              ) {}

  get cuentas$():Observable<CrearCuentaModel[]>{
    return this.adminState.cuentas$();
  }

  crearCuenta(cuenta:CrearCuentaModel){
    this.adminApi.registrarCuenta(cuenta);
    this.adminState.addCuenta(cuenta);
  }

  eliminarCuenta(cuenta:CrearCuentaModel){
    this.adminApi.eliminarCuenta(cuenta);
    this.adminState.removeCuenta(cuenta);
  }

  updateCuentas(){
    this.adminApi.obtenerCuentas().subscribe(cuenta => {
      this.adminState.setCuentas(cuenta);
    })
  }

}

