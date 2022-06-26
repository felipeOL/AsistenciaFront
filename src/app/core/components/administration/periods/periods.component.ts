import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioCrearCursosComponent} from "../formulario-crear-cursos/formulario-crear-cursos.component";
import {administrationFacade} from "../../facade/administration.facade";
import {FormCreatePeriodComponent} from "../FormCreatePeriod/form-create-period.component";

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {

  constructor(
    private adminFacade:administrationFacade,
    private createPeriodDialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  createPeriod()
  {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    this.createPeriodDialog.open(FormCreatePeriodComponent, dialogConfig)
  }

}
