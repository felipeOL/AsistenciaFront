import {Injectable} from "@angular/core";
import {teacherState} from "../state/teacher.state";
import {teacherApi} from "../api/teacher.api";
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../Models/CourseResponse.model";
import {crearClaseModel} from "../../../Models/crearClase.model";
import {classReponse} from "../../../Models/classReponse.model";
import {SaveAtttendanModel} from "../../../Models/SaveAtttendan.model";
import {MatDialog} from "@angular/material/dialog";
import {CreationStudentResponse} from "../../../Models/creationStudentResponse.model";
import {OkDialogComponent} from "../../../shared/components/dialogs/ok-dialog/ok-dialog.component";

@Injectable()

export class teacherFacade
{
  constructor
  (
    private dialog: MatDialog,
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
      this.teacherApi.addStudentToCourse(idCurso,correoEstudiante).subscribe({next:(respuesta)=>{

        },error:(err)=>{

        }})
  }

  addClase(clase:crearClaseModel){
    let result=this.teacherApi.addClass(clase)
    result.subscribe((response: any) => {
      console.log(response)
        this.dialog.open(OkDialogComponent, {
          data:
            {
              titulo: "Guardado con exito ",
              contenido: "Clase creada con exito"
            }
        })
      }
    );
  }

  public getAllClass(fecha:Date){
    this.teacherApi.getClases(fecha).subscribe(clases => {
      this.teacherState.setClases(clases);
    })
  }

  public getAttendanceOfClass()
  {
    return this.teacherState.getAttendanClass()
  }
  public updateAttendance(idClass:number)
  {
    let attendance = this.teacherApi.getAttendance(idClass)
    this.teacherState.setAttendanClass(attendance)
  }

  public saveAttendan(asistencia: SaveAtttendanModel)
  {
    let result = this.teacherApi.saveAttendan(asistencia)
    result.subscribe(response => {
        this.teacherState.setAttendanClass(asistencia.asistencias)
        this.dialog.open(OkDialogComponent, {
          data:
            {
              titulo: "Guardado con exito ",
              contenido: "se guardo con exito los cambios"
            }
        })
      }
    )
  }

  getSchudeles()
  {
    this.teacherApi.getSchedules().subscribe( respuesta =>
    {
      this.teacherState.setSchudeles(respuesta)
    })

  }

  suscribeSchudeles()
  {
    return this.teacherState.getSchudelesSuscribe()
  }

  createNewStudent(correos:string[])
  {
    return this.teacherApi.addStudent(correos);
  }

  public addNewResponse(response:CreationStudentResponse)
  {
    this.teacherState.addNewStudent(response);
  }

  public getnewStudents()
  {
    return this.teacherState.getnewStudent()
  }
  public updateNewStudents(response:CreationStudentResponse[])
  {
    this.teacherState.setnewStudents();
  }

}
