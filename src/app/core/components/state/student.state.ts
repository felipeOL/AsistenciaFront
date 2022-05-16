import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";

@Injectable()

export class studentState
{

  private coursesState$ = new BehaviorSubject<CourseResponseModel[]>([]);

  courses$():Observable<CourseResponseModel[]>
  {
    return this.coursesState$.asObservable();
  }

  setCourses(courses:CourseResponseModel[])
  {
    this.coursesState$.next(courses);
  }
}
