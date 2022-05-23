import { Component, OnInit } from '@angular/core';
import {teacherFacade} from "../../facade/teacher.facade";
import {Observable} from "rxjs";
import {classReponse} from "../../../../Models/classReponse.model";

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent implements OnInit {

  fechaActual: Date = new Date();
  clases$:Observable<classReponse[]>
  displayedColumns:string[] = ['curso','sala', 'modalidad', 'bloque', 'fecha'];
  constructor(
    private teacherFacade: teacherFacade,
  ) {
    this.clases$ = this.teacherFacade.clases$;
    this.teacherFacade.getAllClass(this.fechaActual);

  }

  ngOnInit(): void {

  }

}
