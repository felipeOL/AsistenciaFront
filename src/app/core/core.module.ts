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
import {administrationApi} from "./components/api/administration.api";
import {studentApi} from "./components/api/student.api";
import {teacherApi} from "./components/api/teacher.api";
import {administrationFacade} from "./components/facade/administration.facade";
import {administrationState} from "./components/state/administration.state";
import {studentState} from "./components/state/student.state";
import {teacherState} from "./components/state/teacher.state";
import {studentFacade} from "./components/facade/student.facade";
import {teacherFacade} from "./components/facade/teacher.facade";
import { TablaCuentasComponent } from './components/administration/administrar-cuentas/tabla-cuentas/tabla-cuentas.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FormularioCrearCuentaComponent } from './components/administration/administrar-cuentas/formulario-crear-cuenta/formulario-crear-cuenta.component';
import {MaterialModule} from "../material/material.module";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import { AccountsComponent } from './components/administration/accounts/accounts.component';
import { AdminCoursesComponent } from './components/administration/admin-courses/admin-courses.component';
import { FormularioCrearCursosComponent } from './components/administration/formulario-crear-cursos/formulario-crear-cursos.component';



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
        TablaCuentasComponent,
        FormularioCrearCuentaComponent,
        AccountsComponent,
        AdminCoursesComponent,
        FormularioCrearCursosComponent,
    ],
    imports: [
        CommonModule,
        MatButtonToggleModule,
        MaterialModule,
        MatSelectModule,
        MatTableModule
    ],
    exports: [
        AccountsComponent
    ],
    providers: [
        administrationApi,
        studentApi,
        teacherApi,
        administrationState,
        studentState,
        teacherState,
        administrationFacade,
        studentFacade,
        teacherFacade,
    ]
})
export class CoreModule { }
