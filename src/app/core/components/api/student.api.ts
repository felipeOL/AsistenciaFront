import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentication.service";
import {Observable, of} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {classReponse} from "../../../Models/classReponse.model";
import {StudentURL} from "../../../Util/studentURL.model";
import {ContenidoBloqueHorarioModel} from "../../../Models/ContenidoBloqueHorario.model";
import {TeacherURL} from "../../../Util/teacherURL.model";

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
    return this.httpClient.get<CourseResponseModel[]>(AdminURL.GET_ALL_COURSES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getClases(fecha: Date): Observable<classReponse[]> {
    console.log("fecha")
    console.log(fecha.toLocaleDateString())
    let fechaString:string =fecha.toLocaleDateString()
    let clases: classReponse[] = [];
    let usuario = this.authservice.getUser();
    this.httpClient.post<classReponse[]>(StudentURL.GET_ALL_CLASS,{fecha:fechaString},{
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
            bloques: element.curso?.bloques,
            anio: element.curso?.anio
          }
        }
        clases.push(newClass);
      })
    })
    return of(clases)
  }

  checkAssistence(idClass: number)
  {
    let body =
      {
        idclase:idClass
      }
    let usuario =this.authservice.getUser();
    return this.httpClient.post(StudentURL.ASSISTENCE_CLASS,body,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getSchedules(): Observable<ContenidoBloqueHorarioModel[]>
  {
    let usuario = this.authservice.getUser();
    return this.httpClient.get<ContenidoBloqueHorarioModel[]>(TeacherURL.GET_SCHEDULES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }
}
