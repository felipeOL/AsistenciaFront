import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CrearCuentaModel} from "../../../../../Models/crearCuenta.model";
import {CuentasService} from "../../../../../services/cuentas.service";
import {ErrorDialogComponent} from "../../../../../shared/components/dialogs/error-dialog/error-dialog.component";
import {OkDialogComponent} from "../../../../../shared/components/dialogs/ok-dialog/ok-dialog.component";

@Component({
  selector: 'app-formulario-crear-cuenta',
  templateUrl: './formulario-crear-cuenta.component.html',
  styleUrls: ['./formulario-crear-cuenta.component.scss']
})
export class FormularioCrearCuentaComponent implements OnInit {

  hide=true
  constructor(
    public dialogref: MatDialogRef<FormularioCrearCuentaComponent>,
    private formBuilder: FormBuilder,
    private cuentasService : CuentasService,
    private dialog: MatDialog,
  ) {}
  crearcuentaForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: ['', Validators.required],
    contraseña: ['', Validators.required],
    rut: ['', Validators.required],
    rol: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public closeDialog():void
  {
    this.dialogref.close()
  }
  public crearCuenta():void
  {
    let nuevaCuenta : CrearCuentaModel = {
      email:this.crearcuentaForm.value.email.toString(),
      nombre:this.crearcuentaForm.value.nombre.toString(),
      contraseña:this.crearcuentaForm.value.contraseña.toString(),
      rut: this.crearcuentaForm.value.rut.toString(),
      rol: parseInt(this.crearcuentaForm.value.rol),
    }
    console.log(nuevaCuenta);
    this.cuentasService.registrarCuenta(nuevaCuenta).subscribe( response => {
        this.dialog.open(OkDialogComponent, {
          data:
            {
              titulo: "Cuenta: "+nuevaCuenta.email+" Creada",
              contenido: "la Cuenta fue Creada correctamente "
            }
        })
        this.dialogref.close();
      })
  }

}
