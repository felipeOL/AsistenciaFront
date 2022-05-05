import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthenticationService} from "../services/authentication.service";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";




@NgModule({
    declarations: [
        LoginComponent,
        NavbarComponent
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
