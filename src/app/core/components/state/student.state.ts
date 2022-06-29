import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {classReponse} from "../../../Models/classReponse.model";
import {ContenidoBloqueHorarioModel} from "../../../Models/ContenidoBloqueHorario.model";

@Injectable()

export class studentState
{

  private schudeles$ = new BehaviorSubject<ContenidoBloqueHorarioModel[]>([])
  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);
  private classState$ = new BehaviorSubject<classReponse[]>([]);

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

  public setSchudeles(schudeles: ContenidoBloqueHorarioModel[])
  {
    this.schudeles$.next(schudeles)
  }

  public getSchudelesSuscribe():BehaviorSubject<ContenidoBloqueHorarioModel[]>
  {
    return this.schudeles$
  }
}
