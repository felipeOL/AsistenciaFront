import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CrearCuentaModel} from "../../../../Models/crearCuenta.model";
import {administrationFacade} from "../../facade/administration.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  FormularioCrearCuentaComponent
} from "../administrar-cuentas/formulario-crear-cuenta/formulario-crear-cuenta.component";
import {FormularioCrearCursosComponent} from "../formulario-crear-cursos/formulario-crear-cursos.component";

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  displayedColumns:string[] = ['codigo', 'nombre', 'sección', 'semestre','bloque'];
  dataSource$:Observable<CrearCuentaModel[]>
  constructor(
              private adminFacade:administrationFacade,
              private crearCuentaDialog: MatDialog,
              ) {
    this.dataSource$ = this.adminFacade.courses$;
    this.adminFacade.updateCourse();
    console.log(this.dataSource$);
  }

  ngOnInit(): void {
  }

  public crearCurso()
  {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    const dialogVal = this.crearCuentaDialog.open(FormularioCrearCursosComponent, dialogConfig)
    dialogVal.afterClosed().subscribe(res =>
      {
        this.adminFacade.updateCuentas();
        dialogVal.close();
      }
    )
  }

}
