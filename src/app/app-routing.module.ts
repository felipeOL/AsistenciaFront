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
import {StudentSchedulesComponent} from "./core/components/student/student-schedules/student-schedules.component";
import {StudentAssistanceComponent} from "./core/components/student/student-assistance/student-assistance.component";
import {AdminCoursesComponent} from "./core/components/administration/admin-courses/admin-courses.component";
import {AccountsComponent} from "./core/components/administration/accounts/accounts.component";
import {StudentCoursesComponent} from "./core/components/student/student-courses/student-courses.component";

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"teacher-dashboard",component:DashboardTeacherComponent},
  {path:"student-dashboard",component:DashboardStudentComponent},
  {path:"admin-dashboard",component:DashboardAdministrationComponent},
  {path:"teacher-courses",component:CoursesComponent},
  {path:"teacher-schedules",component:SchedulesComponent},
  {path:"teacher-assistance",component:AssistanceComponent},
  {path:"student-schedules",component:StudentSchedulesComponent},
  {path:"student-assistance",component:StudentAssistanceComponent},
  {path:"admin-courses",component:AdminCoursesComponent},
  {path:"admin-accounts",component:AccountsComponent},
  {path:"student-courses",component:StudentCoursesComponent},
  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
