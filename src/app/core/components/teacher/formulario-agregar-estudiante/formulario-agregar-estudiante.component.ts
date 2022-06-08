import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {teacherFacade} from "../../facade/teacher.facade";
import {CrearCourseModel} from "../../../../Models/CrearCourse.model";
import {FormAgregarEstudianteDataModel} from "../../../../Models/FormAgregarEstudianteData.model";

@Component({
  selector: 'app-formulario-agregar-estudiante',
  templateUrl: './formulario-agregar-estudiante.component.html',
  styleUrls: ['./formulario-agregar-estudiante.component.scss']
})
export class FormularioAgregarEstudianteComponent implements OnInit {
  datos:FormAgregarEstudianteDataModel;
  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data: FormAgregarEstudianteDataModel,
    public dialogref: MatDialogRef<FormularioAgregarEstudianteComponent>,
    private formBuilder: FormBuilder,
    private teacherFacade: teacherFacade
  ) {
    this.datos = data
    this.addStudentForm.patchValue({
      idCurso: this.datos.idCurso,
    })
  }

  ngOnInit(): void
  {

  }

  addStudentForm = this.formBuilder.group({
    idCurso: ['',Validators.required],
    emailStudent: ['', Validators.required]
  })

  public closeDialog():void
  {
    this.dialogref.close()
  }

  public addStudent():void
  {

    let response = this.teacherFacade.addStudenToCourse(this.addStudentForm.value.idCurso, this.addStudentForm.value.emailStudent);
    console.log(response)
    this.closeDialog()
  }
}
