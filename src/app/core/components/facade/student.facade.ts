import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {studentState} from "../state/student.state";
import {studentApi} from "../api/student.api";
import {classReponse} from "../../../Models/classReponse.model";

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

  get clases$():Observable<classReponse[]>{
    return this.studentState.clases$();
  }

  updateCourse()
  {
    this.studentApi.getAllCourses().subscribe(curso => {
      this.studentState.setCourses(curso);
    })
  }

  public getAllClass(fecha:Date){
    this.studentApi.getClases(fecha).subscribe(clases => {
      this.studentState.setClases(clases);
    })
  }

  public asistir(idClass: number, fecha: Date): void
  {
    let respuest = this.studentApi.checkAssistence(idClass)
    if(respuest !== null)
    {
      this.updateClases(fecha)
    }
  }

  public updateClases(data:Date): void
  {
    this.studentApi.getClases(data).subscribe(clases => {
      this.studentState.setClases(clases);
    })
  }
}
