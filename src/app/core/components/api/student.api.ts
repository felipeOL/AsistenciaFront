import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {Observable, of} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {classReponse} from "../../../Models/classReponse.model";
import {StudentURL} from "../../../Util/studentURL.model";

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

  getClases(fecha: Date): Observable<classReponse[]> {
    let clases: classReponse[] = [];
    let usuario = this.authservice.getUser();
    this.httpClient.post<classReponse[]>(StudentURL.GET_ALL_CLASS, fecha,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(response => {
      console.log(response)
      response.forEach(element => {
        let newClass:classReponse = {
          id: element.id,
          sala: element.sala,
          modalidad: element.modalidad,
          bloque: element.bloque,
          fecha: element.fecha,
          asistio: element.asistio,
          curso: element.curso = {
            id: element.curso?.id,
            codigo: element.curso?.codigo,
            nombre: element.curso?.nombre,
            seccion: element.curso?.seccion,
            semestre: element.curso?.semestre,
            bloque: element.curso?.bloque,
            anio: element.curso?.anio
          }
        }
        clases.push(newClass);
      })
    })
    return of(clases)
  }

  checkAssistence(){

  }
}
