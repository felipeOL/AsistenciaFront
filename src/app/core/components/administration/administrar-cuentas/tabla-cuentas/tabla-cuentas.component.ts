import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CuentasService} from "../../../../../services/cuentas.service";
import {GetUsersModel} from "../../../../../Models/getUsers.model";
import {Observable, tap} from "rxjs";
import {CrearCuentaModel} from "../../../../../Models/crearCuenta.model";
import {administrationFacade} from "../../../facade/administration.facade";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {FormularioCrearCuentaComponent} from "../formulario-crear-cuenta/formulario-crear-cuenta.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tabla-cuentas',
  templateUrl: './tabla-cuentas.component.html',
  styleUrls: ['./tabla-cuentas.component.scss']
})
export class TablaCuentasComponent implements OnInit,OnDestroy, AfterViewInit{

  i:number=0
  displayedColumns:string[] = ['email', 'nombre', 'rut', 'rol'];
  dataSource$:Observable<GetUsersModel[]>
  myDataSource: MatTableDataSource<GetUsersModel> = new MatTableDataSource<GetUsersModel>(cuentas)

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private adminFacade:administrationFacade,
    private crearCuentaDialog: MatDialog,
    private cdr : ChangeDetectorRef,
  ) {
    this.dataSource$ = this.adminFacade.cuentas$;
  }

  ngOnInit(): void
  {
    this.adminFacade.updateCuentas();
    /* aqui probe artas cosas nada funca XD
    this.dataSource$.subscribe( respuesta => {
      this.myDataSource.data = respuesta
    })
     */
  }

  ngAfterViewInit()
  {
    this.myDataSource.paginator = this.paginator
  }

  ngOnDestroy() {
    console.log("Bailando solo en la oscuridad, te vas a acostumbrar, a ver toda la vida pasar....");
    this.dataSource$.subscribe().unsubscribe();
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
    })
  }
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }

  getNumberOffClases()
  {
    this.myDataSource.data.length
  }

}

const cuentas:GetUsersModel[] =[
  {
    email: "matias@gmailk.com",
    nombre: "matias",
    rut: "17981314-9",
    rol:"Administrator"
  },
  {
    email: "dylan@gmailk.com",
    nombre: "dylan",
    rut: "18967234-9",
    rol:"Teacher"
  },
  {
    email: "benja@gmailk.com",
    nombre: "benjamin",
    rut: "21225333-9",
    rol:"Student"
  }
]


