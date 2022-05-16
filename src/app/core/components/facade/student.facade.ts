import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {studentState} from "../state/student.state";
import {studentApi} from "../api/student.api";

@Injectable()

export class studentFacade
{
  constructor
  (
    private studentState: studentState,
    private studentApi: studentApi
  )
  {}

  get courses$():Observable<CourseResponseModel[]>{
    return this.studentState.courses$();
  }

  updateCourse()
  {
    this.studentApi.getAllCourses().subscribe(curso => {
      this.studentState.setCourses(curso);
    })
  }
}
