import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, elementAt, Observable, of} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {AdminURL} from "../../../Util/adminURL.model";
import {AuthenticationService} from "../../../services/authentication.service";
import {TeacherURL} from "../../../Util/teacherURL.model";
import {crearClaseModel} from "../../../Models/crearClase.model";
import {classReponse} from "../../../Models/classReponse.model";
import {AttendanModel} from "../../../Models/attendan.model";
import {SaveAtttendanModel} from "../../../Models/SaveAtttendan.model";
import {ContenidoBloqueHorarioModel} from "../../../Models/ContenidoBloqueHorario.model";

@Injectable()

export class teacherApi {
  constructor
  (
    private httpclient: HttpClient,
    private authservice: AuthenticationService
  ) {
  }

  getAllCourses(): Observable<CourseResponseModel[]> {
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
            bloques: course.bloques,
            anio: course.anio,
            profesor: course.profesor
          }
          courseList.push(nuevoCurso)
        })
      }
    )
    return of(courseList);
  }

  public addStudentToCourse(idCurso: number, emailEstudiante: string) {
    let usuario = this.authservice.getUser();
    return this.httpclient.post(TeacherURL.Add_STUDENT_TO_COURSE, {idcurso: idCurso, idestudiante: emailEstudiante}, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  public addClass(clase: crearClaseModel): any {
    console.log(clase)
    let usuario = this.authservice.getUser();
    this.httpclient.post(TeacherURL.ADD_CLASS, clase, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(response => {
      return response;
    })
  }

  public getClases(fecha: Date): Observable<classReponse[]> {
    console.log(fecha)
    let clases: classReponse[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.post<classReponse[]>(TeacherURL.GET_ALL_CLASS, fecha,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(response => {
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

  public getAttendance(idclase:number)
  {
    let attendanClass: AttendanModel[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.post<AttendanModel[]>(TeacherURL.GET_ATTENDANCE_OF, {
      idclase:idclase
    },{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe(response =>
    {
      response.forEach(elemenT =>
      {
        attendanClass.push(elemenT)
      })
    })
    return attendanClass
  }

  public saveAttendan(asistencia:SaveAtttendanModel)
  {
    let usuario = this.authservice.getUser();
    return this.httpclient.post<AttendanModel[]>(TeacherURL.SAVE_ATTENDANCE, asistencia,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    })
  }

  getSchedules(): ContenidoBloqueHorarioModel[]
  {
    let SchudeleList: ContenidoBloqueHorarioModel[] = [];
    let usuario = this.authservice.getUser();
    this.httpclient.get<ContenidoBloqueHorarioModel[]>(TeacherURL.GET_SCHEDULES, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + usuario.token
      }
    }).subscribe( repuesta => {
      repuesta.forEach(element =>
      {
        SchudeleList.push(element)
      })
    })
    return SchudeleList
  }
}
