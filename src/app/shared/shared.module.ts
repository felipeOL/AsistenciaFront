import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthenticationService} from "../services/authentication.service";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';
import {MatDialogRef} from "@angular/material/dialog";


@NgModule({
    declarations: [
        LoginComponent,
        NavbarComponent,
        ErrorDialogComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
    ],
  providers: [
    AuthenticationService
    ,
    {
      //el mat dialog se bugea si s eusa en muchos componentes asi que nitas porveerlos desde un modulo mas cercanoa la raiz
      //https://stackoverflow.com/questions/47270324/nullinjectorerror-no-provider-for-matdialogref
      provide: MatDialogRef,
      useValue:{}
    }
  ]

})
export class SharedModule { }
