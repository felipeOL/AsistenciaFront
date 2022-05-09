import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthenticationService} from "../services/authentication.service";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import { ErrorDialogComponent } from './components/dialogs/error-dialog/error-dialog.component';




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
  providers: [AuthenticationService]

})
export class SharedModule { }
