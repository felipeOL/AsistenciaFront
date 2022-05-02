import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
    declarations: [
        LoginComponent,
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
