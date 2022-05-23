import {Injectable} from "@angular/core";
import {teacherState} from "../state/teacher.state";
import {teacherApi} from "../api/teacher.api";
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {crearClaseModel} from "../../../Models/crearClase.model";
import {classReponse} from "../../../Models/classReponse.model";

@Injectable()

export class teacherFacade
{
  constructor
  (
    private teacherState: teacherState,
    private teacherApi: teacherApi
  )
  {}

  get courses$():Observable<CourseResponseModel[]>{
    return this.teacherState.courses$();
  }

  get clases$():Observable<classReponse[]>{
    return this.teacherState.clases$();
  }

  updateCourse()
  {
    this.teacherApi.getAllCourses().subscribe(curso => {
      this.teacherState.setCourses(curso);
    })
  }

  public addStudenToCourse(idCurso: number, correoEstudiante: string):any
  {
      return this.teacherApi.addStudentToCourse(idCurso,correoEstudiante)
  }

  addClase(clase:crearClaseModel){
    this.teacherApi.addClass(clase);
  }

  public getAllClass(fecha:Date){
    this.teacherApi.getClases(fecha).subscribe(clases => {
      this.teacherState.setClases(clases);
    })
  }

}
