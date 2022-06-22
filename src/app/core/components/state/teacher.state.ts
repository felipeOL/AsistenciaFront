import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {classReponse} from "../../../Models/classReponse.model";
import {AttendanModel} from "../../../Models/attendan.model";
import {BloqueHorarioModel} from "../../../Models/BloqueHorario.model";

@Injectable()

export class teacherState
{
  private attendanClass : AttendanModel[] = []
  private attendanClass$= new BehaviorSubject<AttendanModel[]>(this.attendanClass)
  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);
  private classState$ = new BehaviorSubject<classReponse[]>([]);

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


}
