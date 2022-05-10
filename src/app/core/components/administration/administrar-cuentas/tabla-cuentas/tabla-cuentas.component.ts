import { Component, OnInit } from '@angular/core';
import {CuentasService} from "../../../../../services/cuentas.service";
import {GetUsersModel} from "../../../../../Models/getUsers.model";
import {Observable} from "rxjs";
import {CrearCuentaModel} from "../../../../../Models/crearCuenta.model";
import {administrationFacade} from "../../../facade/administration.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioCrearCuentaComponent} from "../formulario-crear-cuenta/formulario-crear-cuenta.component";

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
    private crearCuentaDialog: MatDialog,
  ) {
    this.dataSource$ = this.adminFacade.cuentas$;
    this.adminFacade.updateCuentas();
  }

  ngOnInit(): void
  {
    this.adminFacade.updateCuentas();
  }

  public crearCuenta()
  {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    const dialogVal = this.crearCuentaDialog.open(FormularioCrearCuentaComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
    {
      this.adminFacade.updateCuentas();
      dialogVal.close();
    }
    )
  }

}
