import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {classReponse} from "../../../Models/classReponse.model";

@Injectable()

export class studentState
{

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
}
