import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {administrationFacade} from "../../facade/administration.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioCrearCursosComponent} from "../formulario-crear-cursos/formulario-crear-cursos.component";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit,OnDestroy {
  displayedColumns:string[] = ['codigo', 'Profesor','nombre', 'sección', 'semestre'];
  cursos:CourseResponseModel[]=[]
  subscriptionDataSource$:Subscription
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
              private adminFacade:administrationFacade,
              private crearCuentaDialog: MatDialog,
              ) {
    this.subscriptionDataSource$ = this.adminFacade.courses$.subscribe();
    this.adminFacade.updateCourse();
    console.log(this.subscriptionDataSource$);
  }

  ngOnInit(): void {
    this.subscriptionDataSource$ = this.adminFacade.courses$.subscribe(data => {
      this.cursos=data
      console.log(this.cursos)
    });
    this.adminFacade.updateCourse()
  }

  ngOnDestroy() {
    this.subscriptionDataSource$.unsubscribe()
    console.log("Destruccion!");
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
        this.adminFacade.updateCourse();
        dialogVal.close();
      }
    )
    this.adminFacade.updateCourse();
  }

}
