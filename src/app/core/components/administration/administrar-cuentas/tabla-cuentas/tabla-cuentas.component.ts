import { Component, OnInit } from '@angular/core';
import {CuentasService} from "../../../../../services/cuentas.service";
import {GetUsersModel} from "../../../../../Models/getUsers.model";
import {Observable} from "rxjs";
import {CrearCuentaModel} from "../../../../../Models/crearCuenta.model";
import {administrationFacade} from "../../../facade/administration.facade";

@Component({
  selector: 'app-tabla-cuentas',
  templateUrl: './tabla-cuentas.component.html',
  styleUrls: ['./tabla-cuentas.component.scss']
})
export class TablaCuentasComponent implements OnInit {

  displayedColumns:string[] = ['email', 'nombre', 'rut', 'rol'];
  dataSource$:Observable<CrearCuentaModel[]>
  constructor(
    private adminFacade:administrationFacade,
  ) {
    this.dataSource$ = this.adminFacade.cuentas$;
    this.adminFacade.updateCuentas();
  }

  ngOnInit(): void
  {

  }

}
