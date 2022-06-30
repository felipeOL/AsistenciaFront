import {Component, Inject, OnInit} from '@angular/core';
import {CreationStudentResponse} from "../../../../Models/creationStudentResponse.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewStudentsExcelService} from "../../../../services/new-students-excel.service";
import {Observable, Subscription} from "rxjs";
import {teacherFacade} from "../../facade/teacher.facade";

@Component({
  selector: 'app-result-creation-students',
  templateUrl: './result-creation-students.component.html',
  styleUrls: ['./result-creation-students.component.scss']
})
export class ResultCreationStudentsComponent implements OnInit {

  displayedColumns: string[] = ['email', 'resultado', 'comentario'];
  dataSource: CreationStudentResponse[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CreationStudentResponse[],
    public dialogRef: MatDialogRef<ResultCreationStudentsComponent>,
  ) {
    this.dataSource = this.data;
  }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
