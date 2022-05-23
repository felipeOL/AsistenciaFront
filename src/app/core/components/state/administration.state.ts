import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {GetUsersModel} from "../../../Models/getUsers.model";
import {CrearCuentaModel} from "../../../Models/crearCuenta.model";
import {CrearCourseModel} from "../../../Models/CrearCourse.model";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";

@Injectable()

export class administrationState{
  private cuentasState$ = new BehaviorSubject<GetUsersModel[]>([]);
  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);

  cuentas$():BehaviorSubject<GetUsersModel[]>{
    return this.cuentasState$;
  }

  courses$():Observable<CourseResponseModel[]>{
    return this.coursesState$.asObservable();
  }

  addCuenta(cuenta:GetUsersModel)
  {
    let cuentaNueva: GetUsersModel = {
      email: cuenta.email,
      nombre: cuenta.nombre,
      rut: cuenta.rut,
      rol:cuenta.rol


    }
    this.cuentasState$.next([...this.cuentasState$.getValue()])
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

  setCuentas(cuentas:GetUsersModel[]){
    this.cuentasState$.next(cuentas);
  }

  setCourses(courses:CourseResponseModel[]){
    this.coursesState$.next(courses);
  }

}
