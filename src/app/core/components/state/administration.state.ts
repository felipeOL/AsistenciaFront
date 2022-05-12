import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {Course} from "../../../Models/course.model";

@Injectable()

export class administrationState{
  private cuentasState$ = new BehaviorSubject<CrearCuentaModel[]>([]);
  private coursesState$ = new BehaviorSubject<Course[]>([]);

  cuentas$():Observable<CrearCuentaModel[]>{
    return this.cuentasState$.asObservable();
  }

  courses$():Observable<Course[]>{
    return this.coursesState$.asObservable();
  }

  addCuenta(cuenta:CrearCuentaModel){
    this.cuentasState$.next([...this.cuentasState$.getValue(),cuenta])
  }

  addCourses(courses:Course){
    this.coursesState$.next([...this.coursesState$.getValue(),courses])
  }

  removeCuenta(cuenta:CrearCuentaModel){
    let listaCuentas = this.cuentasState$.getValue().filter(cuentas => cuentas.email != cuentas.email);
    this.cuentasState$.next(listaCuentas);
  }

  removeCourses(courses:Course){
    let courseList = this.coursesState$.getValue().filter(course => course.codigo != courses.codigo);
    this.cuentasState$.next(courseList);
  }

  setCuentas(cuentas:CrearCuentaModel[]){
    this.cuentasState$.next(cuentas);
  }

  setCourses(courses:Course[]){
    this.coursesState$.next(courses);
  }

}
