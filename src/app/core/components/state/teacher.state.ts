import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {classReponse} from "../../../Models/classReponse.model";
import {AttendanModel} from "../../../Models/attendan.model";
import {BloqueHorarioModel} from "../../../Models/BloqueHorario.model";
import {ContenidoBloqueHorarioModel} from "../../../Models/ContenidoBloqueHorario.model";
import {CreationStudentResponse} from "../../../Models/creationStudentResponse.model";

@Injectable()

export class teacherState
{
  private attendanClass : AttendanModel[] = []
  private attendanClass$= new BehaviorSubject<AttendanModel[]>(this.attendanClass)
  private schudeles$ = new BehaviorSubject<ContenidoBloqueHorarioModel[]>([])
  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);
  private classState$ = new BehaviorSubject<classReponse[]>([]);
  private newStudent: CreationStudentResponse[] = [];
  private newStudentState$ = new BehaviorSubject<CreationStudentResponse[]>(this.newStudent);

  public setSchudeles(schudeles: ContenidoBloqueHorarioModel[])
  {
    this.schudeles$.next(schudeles)
  }

  public getSchudelesSuscribe():BehaviorSubject<ContenidoBloqueHorarioModel[]>
  {
    return this.schudeles$
  }

  public setAttendanClass(asistencia:AttendanModel[])
  {
    this.attendanClass = asistencia
    this.attendanClass$.next(this.attendanClass)
  }

  public getAttendanClass()
  {
    return this.attendanClass$
  }

  courses$():Observable<CourseResponseModel[]>
  {
    return this.coursesState$.asObservable();
  }

  clases$():Observable<classReponse[]>
  {
    return this.classState$.asObservable();
  }

  setCourses(courses:CourseResponseModel[])
  {
    this.coursesState$.next(courses);
  }

  setClases(clases:classReponse[])
  {
    this.classState$.next(clases);
  }

  public addNewStudent(response:CreationStudentResponse)
  {
    console.log("new response:",response);
    this.newStudent.push(response);
  }

  public setnewStudents()
  {
    this.newStudentState$.next(this.newStudent);
  }

  public getnewStudent()
  {
    return this.newStudentState$;
  }

}
