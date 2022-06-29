import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

type AOA = any[][];

@Component({
  selector: 'app-sheet-new-student',
  templateUrl: './sheet-new-students.component.html',
  styleUrls: ['./sheet-new-students.component.scss']
})
export class SheetNewStudentsComponent implements OnInit {
  data: AOA = [];
  wopts: XLSX.WritingOptions = {bookType: 'xlsx', type: 'array'};
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {}

  export(): void {}

  constructor() { }

  ngOnInit(): void {
  }

}
