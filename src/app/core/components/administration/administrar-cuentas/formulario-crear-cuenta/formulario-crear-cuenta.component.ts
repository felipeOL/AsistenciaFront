import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {CrearCuentaModel} from "../../../../../Models/crearCuenta.model";
import {CuentasService} from "../../../../../services/cuentas.service";
import {ErrorDialogComponent} from "../../../../../shared/components/dialogs/error-dialog/error-dialog.component";

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
      rol: parseInt(this.crearcuentaForm.value.rol)
    }
    this.cuentasService.registrarCuenta(nuevaCuenta).subscribe( response => {
      if(response == 'e')
      {
        this.dialog.open(ErrorDialogComponent, {
          data:
            {
              titulo: 'Error al registrar usuario ',
              contenido: 'favor de validar que los datos sean correctos, el usuario no exista y verificar que se cuenta con internet'
            }
        })
      }
    })
  }

}
