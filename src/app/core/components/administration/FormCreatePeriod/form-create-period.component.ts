import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CuentasService} from "../../../../services/cuentas.service";
import {ErrorDialogComponent} from "../../../../shared/components/dialogs/error-dialog/error-dialog.component";
import {PeriodsComponent} from "../periods/periods.component";
import {PeriodModel} from "../../../../Models/Period.model";
import {administrationFacade} from "../../facade/administration.facade";

@Component({
  selector: 'app-form-create-period',
  templateUrl: './form-create-period.component.html',
  styleUrls: ['./form-create-period.component.scss']
})
export class FormCreatePeriodComponent implements OnInit {

  fechaFin:Date = new Date()
  fechaInicio:Date = new Date()

  constructor(
    public dialogref: MatDialogRef<FormCreatePeriodComponent>,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private adminFacade: administrationFacade
  ) { }

  ngOnInit(): void {
  }

  onChangeFechaFin(event:Date):void{
    this.fechaFin = event;
  }

  onChangeFechaInicio(event:Date):void{
    this.fechaInicio = event;
  }
  createPeriodForm = this.formBuilder.group({
    nombre:['', Validators.required],
    anio: ['', Validators.required],
    fechaInicio:['',Validators.required],
    fechaFin:['',Validators.required]
  })

  createPeriodo()
  {
    if(this.createPeriodForm.value.fechaFin<this.createPeriodForm.value.fechaInicio)
    {
      this.dialog.open(ErrorDialogComponent, {
        data:
          {
            titulo: "Rango de fechas no valido",
            contenido: "por favor ingrese correctamente el rango de fechas, recordando que la fecha inicial tiene que ser mayor a la fecha final"
          }
      })
    }
    else
    {
      if(typeof this.fechaFin != 'undefined' && typeof this.fechaInicio != 'undefined' )
      {
        this.fechaInicio = new Date(this.fechaInicio.toString())
        this.fechaFin = new Date(this.fechaFin.toString())
        this.fechaInicio.setDate(this.fechaInicio.getDate()+1)
        this.fechaFin.setDate(this.fechaFin.getDate()+1)
        this.fechaInicio.setHours(0,0,1)
        this.fechaFin.setHours(23,59,59)
        let newPeriod: PeriodModel = {
          nombre: this.createPeriodForm.value.nombre,
          anio:this.createPeriodForm.value.anio,
          fechainicio:this.fechaInicio,
          fechafin:this.fechaFin
        }
        console.log(newPeriod)
      }

      //this.adminFacade.createPeriod(newPeriod)
      this.closeDialog()
    }
  }

  closeDialog():void
  {
    this.dialogref.close()
  }
}
