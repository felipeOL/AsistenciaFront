import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {teacherFacade} from "../../facade/teacher.facade";
import {CrearCourseModel} from "../../../../Models/CrearCourse.model";
import {crearClaseModel} from "../../../../Models/crearClase.model";
import {HorarioBloqueService} from "../../../../services/horario-bloque.service";

@Component({
  selector: 'app-formulario-crear-clase',
  templateUrl: './formulario-crear-clase.component.html',
  styleUrls: ['./formulario-crear-clase.component.scss']
})
export class FormularioCrearClaseComponent implements OnInit {

  constructor(
    public dialogref: MatDialogRef<FormularioCrearClaseComponent>,
    private formBuilder: FormBuilder,
    private teacherFacade: teacherFacade,
    private horarioServici:HorarioBloqueService
  ) { }

  courseForm = this.formBuilder.group({
    idCurso: ['',Validators.required],
    sala: ['', Validators.required],
    modalidad: ['',Validators.required],
    bloque: ['',Validators.required],
    fecha: ['',Validators.required],
  })

  ngOnInit(): void {
  }

  public closeDialog():void
  {
    this.dialogref.close()
  }

  addClase():void
  {
    let newClase : crearClaseModel =
      {
        idCurso: this.courseForm.value.idCurso.toString(),
        sala: this.courseForm.value.sala.toString(),
        modalidad: this.courseForm.value.modalidad.toString(),
        bloque: this.courseForm.value.bloque.toString(),
        fecha: this.courseForm.value.fecha,
      }
    let bloque = this.horarioServici.getBloque(newClase.bloque)
    if(bloque.horaInicio<0)
    {
      console.log("error al ingresdar el bloque")
    }
    else
    {
      // @ts-ignore
      let newDate = new Date(newClase.fecha.toString())
      newDate.setHours(bloque.horaInicio,bloque.minutoInicio)
      newClase.fecha = newDate
      console.dir(newClase);
      this.teacherFacade.addClase(newClase);
      this.closeDialog()
    }
  }


}
