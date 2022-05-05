import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./shared/components/login/login.component";
import {DashboardTeacherComponent} from "./core/components/teacher/dashboard-teacher/dashboard-teacher.component";
import {DashboardStudentComponent} from "./core/components/student/dashboard-student/dashboard-student.component";
import {
  DashboardAdministrationComponent
} from "./core/components/administration/dashboard-administration/dashboard-administration.component";
import {CoursesComponent} from "./core/components/teacher/courses/courses.component";
import {SchedulesComponent} from "./core/components/teacher/schedules/schedules.component";
import {AssistanceComponent} from "./core/components/teacher/assistance/assistance.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"teacher-dashboard",component:DashboardTeacherComponent},
  {path:"student-dashboard",component:DashboardStudentComponent},
  {path:"admin-dashboard",component:DashboardAdministrationComponent},
  {path:"teacher-courses",component:CoursesComponent},
  {path:"teacher-schedules",component:SchedulesComponent},
  {path:"teacher-assistance",component:AssistanceComponent},

  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
