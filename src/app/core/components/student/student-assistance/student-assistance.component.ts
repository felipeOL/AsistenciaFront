import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {classReponse} from "../../../../Models/classReponse.model";
import {studentFacade} from "../../facade/student.facade";

@Component({
  selector: 'app-student-assistance',
  templateUrl: './student-assistance.component.html',
  styleUrls: ['./student-assistance.component.scss']
})
export class StudentAssistanceComponent implements OnInit {

  fechaActual: Date = new Date();
  clases$:Observable<classReponse[]>
  displayedColumns:string[] = ['curso','sala', 'modalidad', 'bloque', 'fecha'];
  constructor(
    private studentFacade: studentFacade,
  ) {
    this.clases$ = this.studentFacade.clases$;
    this.studentFacade.getAllClass(this.fechaActual);
    console.log(this.clases$)

  }

  ngOnInit(): void {
  }

}
