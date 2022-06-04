import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {CourseStudentService} from "../../../services/course-student.service";

type AOA = any[][];

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  data: AOA = [];
  wopts: XLSX.WritingOptions = {bookType: 'xlsx', type: 'array'};
  fileName: string = 'SheetJS.xlsx';

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      let i = 0
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, {header: 1}));
      for (let j = 0; j < this.data.length; j++) {
        for (let k = 0; k < 4; k++) {
          if(k == 3)
          this.excelService.addCorreo(this.data[j][k]);
        }
        this.excelService.cantidadCorreos();
      }
      this.excelService.mostrarDatos();
    };
    reader.readAsBinaryString(target.files[0]);
  }

  constructor(private excelService:CourseStudentService) { }

  ngOnInit(): void {
  }

}
