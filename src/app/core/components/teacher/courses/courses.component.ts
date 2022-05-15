import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {teacherFacade} from "../../facade/teacher.facade";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns:string[] = ['codigo', 'nombre', 'sección', 'semestre','bloque'];
  dataSource$:Observable<CourseResponseModel[]>
  constructor
  (
    private teacherFacade: teacherFacade
  )
  {
    this.dataSource$ = this.teacherFacade.courses$;
    this.teacherFacade.updateCourse();
    console.log(this.dataSource$);
  }

  ngOnInit(): void {
  }

}
