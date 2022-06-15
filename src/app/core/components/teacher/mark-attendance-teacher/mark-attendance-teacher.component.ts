import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataModel} from "../../../../Models/dialogData.model";
import {AttendanModel} from "../../../../Models/attendan.model";
import {teacherFacade} from "../../facade/teacher.facade";
import {BehaviorSubject, Subscription} from "rxjs";
import {SaveAtttendanModel} from "../../../../Models/SaveAtttendan.model";

@Component({
  selector: 'app-mark-attendance-teacher',
  templateUrl: './mark-attendance-teacher.component.html',
  styleUrls: ['./mark-attendance-teacher.component.scss']
})
export class MarkAttendanceTeacherComponent implements OnInit, OnDestroy{

  counter: number =0
  displayedColumns: string[]=['email', 'attendan'];
  dataSource :AttendanModel[] = [];
  dataSourceSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    public dialogref: MatDialogRef<MarkAttendanceTeacherComponent>,
    private teacherFacade: teacherFacade,
  )
  {
    this.dataSourceSubscription = this.teacherFacade.getAttendanceOfClass().subscribe()
  }

  ngOnInit(): void
  {
    this.dataSourceSubscription = this.teacherFacade.getAttendanceOfClass().subscribe( data =>
    {
      this.dataSource = data
      this.counter+=1
      console.log('counter:'+this.counter )
      console.log(this.dataSource )
    })
    this.teacherFacade.updateAttendance(this.data)
    console.log('counter:'+this.counter )
    console.log(this.dataSource )
  }

  ngOnDestroy()
  {
    this.dataSourceSubscription.unsubscribe()
  }

  public changAttendance(email:string): void
  {
    let alumno = this.dataSource.find(alumn => alumn.email === email)
    if(typeof alumno !== 'undefined')
    {
      alumno.asistio = !alumno.asistio
    }
    console.log(alumno)
    console.log(this.dataSource)
  }

  public closeDialog():void
  {
    this.dialogref.close()
  }

  public guardar():void
  {
    let saveAttendan: SaveAtttendanModel= {
      idclase: this.data,
      asistencias: this.dataSource
    }
    this.teacherFacade.saveAttendan(saveAttendan)
    console.log(saveAttendan)
  }
}


