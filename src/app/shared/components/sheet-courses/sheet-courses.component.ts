import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";

type AOA = any[][];

@Component({
  selector: 'app-sheet-courses',
  templateUrl: './sheet-courses.component.html',
  styleUrls: ['./sheet-courses.component.scss']
})
export class SheetCoursesComponent implements OnInit {
  data: AOA = [];
  wopts: XLSX.WritingOptions = {bookType: 'xlsx', type: 'array'};
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {}

  export(): void {}

  constructor() { }

  ngOnInit(): void {
  }

}
