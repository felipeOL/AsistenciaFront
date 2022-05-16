import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {Observable, of} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {AdminURL} from "../../../Util/adminURL.model";

@Injectable()

export class studentApi{
  constructor(
    private httpClient:HttpClient,
    private authservice: AuthenticationService,
  ) {
  }

  getAllCourses(): Observable<CourseResponseModel[]>{
    let courseList: CourseResponseModel[] = [];
    let usuario = this.authservice.getUser();
    this.httpClient.get<CourseResponseModel[]>(AdminURL.GET_ALL_COURSES, {
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

  checkAssistence(){

  }
}
