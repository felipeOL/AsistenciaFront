import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
import {NewStudentsExcelService} from "../../../services/new-students-excel.service";

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

  onFileChange(evt: any) {
    this.excelService.setCorreos([]);
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    if(target.files.length > 0){
      console.log("target.files.length:",target.files.length)
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
        console.log(this.data);
        for (let j = 1; j < this.data.length; j++) {
          for (let k = 0; k < 4; k++) {
            if(k == 3 && this.data[j][k] != undefined){
              console.log(this.data[j][k]);
              this.excelService.addCorreo(this.data[j][k]);
            }
          }
        }
        this.excelService.cargarExcel();
      };
      reader.readAsBinaryString(target.files[0]);
    }else{
      this.excelService.setCorreos([]);
    }
  }

  export(): void {}

  constructor(
    private excelService: NewStudentsExcelService
  ) { }

  ngOnInit(): void {
  }

}
