import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  FormularioCrearCuentaComponent
} from "../administrar-cuentas/formulario-crear-cuenta/formulario-crear-cuenta.component";

@Component({
  selector: 'app-dashboard-administration',
  templateUrl: './dashboard-administration.component.html',
  styleUrls: ['./dashboard-administration.component.scss']
})
export class DashboardAdministrationComponent implements OnInit {

  constructor(
    private crearCuentaDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public crearCuenta()
  {
    const dialogConfig = new MatDialogConfig()
    this.crearCuentaDialog.open(FormularioCrearCuentaComponent)
  }

}
