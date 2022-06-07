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

  public asistir(idClass: number, fecha: Date)
  {
    //nueva forma.
    this.studentApi.checkAssistence(idClass).subscribe({next:(respuesta)=>{
      this.updateClases(fecha);
      },error:(err) => {
      console.log()
      }})
  }

  public updateClases(date:Date)
  {
    console.log("update clases....")
    this.studentApi.getClases(date).subscribe(clases => {
      this.studentState.setClases(clases);
    })
  }
}
