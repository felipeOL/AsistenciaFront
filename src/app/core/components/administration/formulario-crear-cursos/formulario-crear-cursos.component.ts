import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CuentasService} from "../../../../services/cuentas.service";
import {CrearCuentaModel} from "../../../../Models/crearCuenta.model";
import {Course} from "../../../../Models/course.model";
import {administrationFacade} from "../../facade/administration.facade";
import {Observable} from "rxjs";

@Component({
  selector: 'app-formulario-crear-cursos',
  templateUrl: './formulario-crear-cursos.component.html',
  styleUrls: ['./formulario-crear-cursos.component.scss']
})
export class FormularioCrearCursosComponent implements OnInit {

  profesorActual = "";
  profesores$: Observable<CrearCuentaModel[]>;

  constructor(
    public dialogref: MatDialogRef<FormularioCrearCursosComponent>,
    private formBuilder: FormBuilder,
    private cuentasService : CuentasService,
    private dialog: MatDialog,
    private adminFacade: administrationFacade,
  ) {
    this.profesores$ = this.adminFacade.cuentas$;
    this.adminFacade.updateCuentas();
    console.log(this.profesores$);
    this.adminFacade.cuentas$.subscribe(cuentas => {
      cuentas.forEach( response => {
      })
    })
  }

  ngOnInit(): void {
  }

  crearCursoForm = this.formBuilder.group({
    id: ['',Validators.required],
    codigo: ['', Validators.required],
    nombre: ['', Validators.required],
    seccion: ['', Validators.required],
    semestre: ['', Validators.required],
    bloque: ['', Validators.required],
  })

  public closeDialog():void
  {
    this.dialogref.close()
  }

  public crearCurso():void
  {
    let nuevoCurso : Course = {
      idprofesor: this.crearCursoForm.value.id.toString(),
      codigo:this.crearCursoForm.value.codigo.toString(),
      nombre:this.crearCursoForm.value.nombre.toString(),
      seccion:this.crearCursoForm.value.seccion.toString(),
      semestre: this.crearCursoForm.value.semestre.toString(),
      bloque: this.crearCursoForm.value.bloque.toString(),
    }
    console.log(nuevoCurso);
    console.log(this.adminFacade.crearCurso(nuevoCurso));
  }

  onChangeProfesor(event:any):void{
    this.profesorActual = event;
  }

}
