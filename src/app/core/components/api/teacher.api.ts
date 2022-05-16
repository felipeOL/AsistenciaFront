import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {AuthenticationService} from "../../../services/authentication.service";
import {TeacherURL} from "../../../Util/teacherURL.model";

@Injectable()

export class teacherApi
{
  constructor
  (
    private httpclient: HttpClient,
    private authservice: AuthenticationService
  )
  {}

  getAllCourses(): Observable<CourseResponseModel[]>{
    let courseList: CourseResponseModel[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.get<CourseResponseModel[]>(AdminURL.GET_ALL_COURSES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(response => {
        response.forEach(course => {
          let nuevoCurso: CourseResponseModel = {
            id: course.id,
            codigo: course.codigo,
            nombre: course.nombre,
            seccion: course.seccion,
            semestre: course.semestre,
            bloque: course.bloque,
            anio: course.anio,
            profesor: course.profesor
          }
          courseList.push(nuevoCurso)
        })
      }
    )
    return of(courseList);
  }

  public addStudentToCourse(idCurso:number, emailEstudiante: string):any
  {
    let usuario = this.authservice.getUser();
    this.httpclient.post(TeacherURL.Add_STUDENT_TO_COURSE, {idcurso:idCurso, idestudiante: emailEstudiante},{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe( response =>{
      return response
    })
  }
}
