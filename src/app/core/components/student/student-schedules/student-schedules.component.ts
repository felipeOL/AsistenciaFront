import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CourseResponseModel} from "../../../../Models/CourseResponse.model";
import {studentFacade} from "../../facade/student.facade";

@Component({
  selector: 'app-student-schedules',
  templateUrl: './student-schedules.component.html',
  styleUrls: ['./student-schedules.component.scss']
})
export class StudentSchedulesComponent implements OnInit {
  displayedColumns:string[] = ['codigo', 'Profesor','nombre', 'sección', 'semestre'];
  dataSource$:Observable<CourseResponseModel[]>
  constructor
  (
    private studentFacade: studentFacade,
  )
  {
    this.dataSource$ = this.studentFacade.courses$;
    this.studentFacade.updateCourse();
    console.log(this.dataSource$);
  }

  ngOnInit(): void {
  }

}
