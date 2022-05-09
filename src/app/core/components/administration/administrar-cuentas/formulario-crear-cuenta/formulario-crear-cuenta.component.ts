import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-formulario-crear-cuenta',
  templateUrl: './formulario-crear-cuenta.component.html',
  styleUrls: ['./formulario-crear-cuenta.component.scss']
})
export class FormularioCrearCuentaComponent implements OnInit {

  constructor(
    public dialogref: MatDialogRef<FormularioCrearCuentaComponent>
  ) { }

  ngOnInit(): void {
  }

  public closeDialog():void
  {
    this.dialogref.close()
  }

}
