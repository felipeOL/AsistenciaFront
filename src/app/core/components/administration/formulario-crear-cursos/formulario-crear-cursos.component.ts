import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CuentasService} from "../../../../services/cuentas.service";
import {CrearCuentaModel} from "../../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../../Models/CrearCourse.model";
import {administrationFacade} from "../../facade/administration.facade";
import {Observable, of} from "rxjs";
import {AuthenticationService} from "../../../../services/authentication.service";
import {BloqueCursoModel} from "../../../../Models/BloqueCurso.model";

@Component({
  selector: 'app-formulario-crear-cursos',
  templateUrl: './formulario-crear-cursos.component.html',
  styleUrls: ['./formulario-crear-cursos.component.scss']
})
export class FormularioCrearCursosComponent implements OnInit,OnDestroy {
  diaActual:string=""
  bloqueActual:string=""
  displayedColumns =["Dia","Bloque"]
  listadoBloques: BloqueCursoModel[]=[]
  dias =["Lunes", "Martes", "Miercoles", "Jueves","Viernes","Sabado"]
  bloques =["1","2","3","4","5","6","7","8","9","10","11","12"]
  profesorActual = "";
  profesores$: Observable<CrearCuentaModel[]>;
  list:CrearCuentaModel[] = [];

  constructor(
    public dialogref: MatDialogRef<FormularioCrearCursosComponent>,
    private formBuilder: FormBuilder,
    private cuentasService : CuentasService,
    private dialog: MatDialog,
    private adminFacade: administrationFacade,
  ) {
    this.adminFacade.updateCuentasProfesor();
    this.profesores$ = this.adminFacade.cuentas$;
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.profesores$.subscribe().unsubscribe()
  }

  crearCursoForm = this.formBuilder.group({
    id: ['',Validators.required],
    codigo: ['', Validators.required],
    nombre: ['', Validators.required],
    seccion: ['', Validators.required],
    semestre: ['', Validators.required],
    anio: ['', Validators.required]
  })

  public closeDialog():void
  {
    this.dialogref.close()
  }

  public crearCurso():void
  {
    let nuevoCurso : CrearCourseModel = {
      idprofesor: this.crearCursoForm.value.id.toString(),
      codigo:this.crearCursoForm.value.codigo.toString(),
      nombre:this.crearCursoForm.value.nombre.toString(),
      seccion:this.crearCursoForm.value.seccion.toString(),
      semestre: this.crearCursoForm.value.semestre.toString(),
      bloquesCurso: this.listadoBloques,
      anio: this.crearCursoForm.value.anio
    }
    let response = this.adminFacade.crearCurso(nuevoCurso);
    this.closeDialog()
  }

  onChangeProfesor(event:any):void{
    this.profesorActual = event;
  }

}
