import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdministrationComponent } from './components/administration/dashboard-administration/dashboard-administration.component';
import {DashboardStudentComponent} from "./components/student/dashboard-student/dashboard-student.component";
import { DashboardTeacherComponent } from './components/teacher/dashboard-teacher/dashboard-teacher.component';



@NgModule({
  declarations: [
    DashboardAdministrationComponent,
    DashboardStudentComponent,
    DashboardTeacherComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
