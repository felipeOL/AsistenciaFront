import { Component, OnInit } from '@angular/core';

export interface  attendan
{
  email:string,
  attendan:boolean
}

const listData: attendan[]=
  [
    {email:"matias@gmail.com", attendan:true},
    {email:"matias1@gmail.com", attendan:false},
    {email:"matias2@gmail.com", attendan:true},
    {email:"matias4@gmail.com", attendan:false},
    {email:"matias5@gmail.com", attendan:true},
    {email:"matias6@gmail.com", attendan:false},
    {email:"matias7@gmail.com", attendan:false},
    {email:"matias8@gmail.com", attendan:false},
  ]

@Component({
  selector: 'app-mark-attendance-teacher',
  templateUrl: './mark-attendance-teacher.component.html',
  styleUrls: ['./mark-attendance-teacher.component.scss']
})
export class MarkAttendanceTeacherComponent implements OnInit {

  displayedColumns: string[]=['email', 'attendan'];
  dataSource = listData;

  constructor() { }

  ngOnInit(): void {
  }
  public changAttendance(email:string): void
  {
    console.log("ajja saludos ")
    let alumno = this.dataSource.find(alumn => alumn.email === email)
    if(typeof alumno !== 'undefined')
    {
      alumno.attendan = !alumno.attendan
    }
    console.log(alumno)
    console.log(this.dataSource)
  }
}


