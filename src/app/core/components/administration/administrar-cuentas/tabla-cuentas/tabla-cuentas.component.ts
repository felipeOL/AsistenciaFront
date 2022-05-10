import { Component, OnInit } from '@angular/core';
import {CuentasService} from "../../../../../services/cuentas.service";

@Component({
  selector: 'app-tabla-cuentas',
  templateUrl: './tabla-cuentas.component.html',
  styleUrls: ['./tabla-cuentas.component.scss']
})
export class TablaCuentasComponent implements OnInit {

  constructor(
    private cuentasService: CuentasService,
  ) { }

  ngOnInit(): void {
  }

  getAllCuentas():void
  {
    this.cuentasService.getAllCuentas()
  }

}
