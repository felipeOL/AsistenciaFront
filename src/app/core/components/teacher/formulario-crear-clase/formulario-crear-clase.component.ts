import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {teacherFacade} from "../../facade/teacher.facade";
import {crearClaseModel} from "../../../../Models/crearClase.model";
import {HorarioBloqueService} from "../../../../services/horario-bloque.service";
import {FormCrearClaseDataModel} from "../../../../Models/FormCrearClaseData.model";
import {BloqueCursoModel} from "../../../../Models/BloqueCurso.model";

@Component({
  selector: 'app-formulario-crear-clase',
  templateUrl: './formulario-crear-clase.component.html',
  styleUrls: ['./formulario-crear-clase.component.scss']
})
export class FormularioCrearClaseComponent implements OnInit {

  bloqueActual:BloqueCursoModel={dia:"",bloque:""}
  public myData:FormCrearClaseDataModel
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormCrearClaseDataModel,
    public dialogref: MatDialogRef<FormularioCrearClaseComponent>,
    private formBuilder: FormBuilder,
    private teacherFacade: teacherFacade,
    private horarioServici:HorarioBloqueService
  )
  {
    this.myData = data
    this.courseForm.patchValue({
      idCurso:this.myData.idCurso,
    })
  }

  courseForm = this.formBuilder.group({
    idCurso: ['',Validators.required],
    sala: ['', Validators.required],
    modalidad: ['',Validators.required],
    bloque: ['',Validators.required],
    fecha: ['',Validators.required],
  })

  ngOnInit(): void {
  }

  onChangeBloque(event:any):void{
    this.bloqueActual= event;
    console.log(this.bloqueActual)
  }

  public closeDialog():void
  {
    this.dialogref.close()
  }

  addClase():void
  {
    let newClase : crearClaseModel =
      {
        idCurso: this.courseForm.value.idCurso,
        sala: this.courseForm.value.sala.toString(),
        modalidad: this.courseForm.value.modalidad.toString(),
        bloque: {dia:this.bloqueActual.dia, bloque:this.bloqueActual.bloque},
        fecha: this.courseForm.value.fecha,
      }
    let bloque = this.horarioServici.getBloque(newClase.bloque.bloque)
    console.log(bloque)
    if(bloque.horaInicio<0)
    {
      console.log("error al ingresdar el bloque")
    }
    else
    {
      console.log("jajaj")

      if(!(typeof newClase.fecha === 'undefined'))
      {
        let fecha=newClase.fecha.toString()
        let newDate = new Date(fecha)
        console.log(newDate)
        newDate.setHours(bloque.horaInicio,bloque.minutoInicio)
        newDate.setDate(newDate.getDate()+1)
        newClase.fecha = new Date(Date.UTC(newDate.getUTCFullYear(), newDate.getUTCMonth(), newDate.getUTCDate(),newDate.getUTCHours(), newDate.getUTCMinutes()))
        console.dir(newClase);
        this.teacherFacade.addClase(newClase);
        this.closeDialog()
      }
      else
      {
        console.log("error date")
      }

    }
  }


}
