import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {DashboardTeacherComponent} from "./core/components/teacher/dashboard-teacher/dashboard-teacher.component";
import {DashboardStudentComponent} from "./core/components/student/dashboard-student/dashboard-student.component";
import {
  DashboardAdministrationComponent
} from "./core/components/administration/dashboard-administration/dashboard-administration.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"teacher-dashboard",component:DashboardTeacherComponent},
  {path:"student-dashboard",component:DashboardStudentComponent},
  {path:"admin-dashboard",component:DashboardAdministrationComponent},
  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
