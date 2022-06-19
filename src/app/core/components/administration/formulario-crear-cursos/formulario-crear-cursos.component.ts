import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CuentasService} from "../../../../services/cuentas.service";
import {CrearCuentaModel} from "../../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../../Models/CrearCourse.model";
import {administrationFacade} from "../../facade/administration.facade";
import {BehaviorSubject, Observable, of} from "rxjs";
import {AuthenticationService} from "../../../../services/authentication.service";
import {BloqueCursoModel} from "../../../../Models/BloqueCurso.model";
import {ErrorDialogComponent} from "../../../../shared/components/dialogs/error-dialog/error-dialog.component";

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
  listadeBloques$= new BehaviorSubject<BloqueCursoModel[]>(this.listadoBloques)
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
      bloques: this.listadoBloques,
      anio: this.crearCursoForm.value.anio
    }
    let response = this.adminFacade.crearCurso(nuevoCurso);
    this.closeDialog()
  }

  onChangeProfesor(event:any):void{
    this.profesorActual = event;
  }
  public agregarBloque():void
  {
    if(!(this.diaActual=="") && !(this.bloqueActual==""))
    {
      let nuevoBloque: BloqueCursoModel ={dia:this.diaActual,bloque:this.bloqueActual}
      let result=this.listadoBloques.filter( result => result.dia==nuevoBloque.dia && result.bloque==nuevoBloque.bloque)
      if(result.length<1)
      {
        this.listadoBloques.push(nuevoBloque)
        this.listadeBloques$.next(this.listadoBloques)
      }
      else {
        this.dialog.open(ErrorDialogComponent, {
          data:
            {
              titulo: "Error bloque ya existe",
              contenido: "revise la informacion ingresada, el dia y bloque selecccionados ya se encuentra registrado"
            }
        })
      }
    }
    else
    {
      this.dialog.open(ErrorDialogComponent, {
        data:
          {
            titulo: "Error ingrese la informacion requerida",
            contenido: "revise la informacion ingresada, los campos dia y bloque deben estar llenos"
          }
      })
    }
  }
}
