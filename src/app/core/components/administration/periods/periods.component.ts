import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {administrationFacade} from "../../facade/administration.facade";
import {FormCreatePeriodComponent} from "../FormCreatePeriod/form-create-period.component";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PeriodResponseModel} from "../../../../Models/PeriodResponse.model";

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit, OnDestroy {

  year:number=0
  panelOpenState=false;
  displayedColumns: string[] = ['nombre', 'anio', 'fechainicio', 'fechafin'];
  dataSource: MatTableDataSource<PeriodResponseModel>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private adminFacade:administrationFacade,
    private createPeriodDialog: MatDialog,
  )
  {
    this.dataSource = new MatTableDataSource<PeriodResponseModel>([])
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void
  {
    let year = new Date()
    this.adminFacade.suscribePeriodos$().subscribe(data =>
    {
      this.dataSource = new MatTableDataSource<PeriodResponseModel>(data)
      this.dataSource.paginator = this.paginator
    })
    this.adminFacade.getPeriodosActuales(year.getFullYear())
  }

  createPeriod()
  {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width="40%";
    this.createPeriodDialog.open(FormCreatePeriodComponent, dialogConfig)
  }

  applyFilter($event:any)
  {

  }

  ngOnDestroy(): void
  {
  }

}
