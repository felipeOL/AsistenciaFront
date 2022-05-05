import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdministrationComponent } from './components/administration/dashboard-administration/dashboard-administration.component';
import {DashboardStudentComponent} from "./components/student/dashboard-student/dashboard-student.component";
import { DashboardTeacherComponent } from './components/teacher/dashboard-teacher/dashboard-teacher.component';
import { CoursesComponent } from './components/teacher/courses/courses.component';
import { SchedulesComponent } from './components/teacher/schedules/schedules.component';
import { AssistanceComponent } from './components/teacher/assistance/assistance.component';
import { StudentSchedulesComponent } from './components/student/student-schedules/student-schedules.component';
import { StudentAssistanceComponent } from './components/student/student-assistance/student-assistance.component';



@NgModule({
  declarations: [
    DashboardAdministrationComponent,
    DashboardStudentComponent,
    DashboardTeacherComponent,
    CoursesComponent,
    SchedulesComponent,
    AssistanceComponent,
    StudentSchedulesComponent,
    StudentAssistanceComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
