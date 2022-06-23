import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../Models/CrearCourse.model";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";

@Injectable()

export class administrationState{
  private cuentasState$ = new BehaviorSubject<CrearCuentaModel[]>([]);
  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);

  cuentas$():Observable<CrearCuentaModel[]>{
    return this.cuentasState$.asObservable();
  }

  courses$():Observable<CourseResponseModel[]>{
    return this.coursesState$
  }

  addCuenta(cuenta:CrearCuentaModel){
    this.cuentasState$.next([...this.cuentasState$.getValue(),cuenta])
  }

  addCourses(courses:CourseResponseModel){
    this.coursesState$.next([...this.coursesState$.getValue(),courses])
  }

  removeCuenta(cuenta:CrearCuentaModel){
    let listaCuentas = this.cuentasState$.getValue().filter(cuentas => cuentas.email != cuentas.email);
    this.cuentasState$.next(listaCuentas);
  }

  removeCourses(courses:CrearCourseModel){
    let courseList = this.coursesState$.getValue().filter(course => course.codigo != courses.codigo);
    this.cuentasState$.next(courseList);
  }

  setCuentas(cuentas:CrearCuentaModel[]){
    this.cuentasState$.next(cuentas);
  }

  setCourses(courses:CourseResponseModel[]){
    this.coursesState$.next(courses);
  }

}
