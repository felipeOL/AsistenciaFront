import { Component, OnInit } from '@angular/core';
import {CuentasService} from "../../../../../services/cuentas.service";
import {GetUsersModel} from "../../../../../Models/getUsers.model";

@Component({
  selector: 'app-tabla-cuentas',
  templateUrl: './tabla-cuentas.component.html',
  styleUrls: ['./tabla-cuentas.component.scss']
})
export class TablaCuentasComponent implements OnInit {

  public displayedColumns = ['email', 'nombre', 'rut', 'rol'];
  cuentas: GetUsersModel[] =[];
  constructor(
    private cuentasService: CuentasService,
  ) { }

  ngOnInit(): void
  {
    this.getAllCuentas()
  }

  getAllCuentas():void
  {

    this.cuentasService.getAllCuentas().subscribe( datos => {
     console.log(datos)
    })
  }

}
