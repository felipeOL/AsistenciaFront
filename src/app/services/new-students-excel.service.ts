import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewStudentsExcelService {
  correos:string[] = [];
  constructor() { }

  addCorreo(correo:string){
    this.correos.push(correo);
  }

  setCorreos(correos:string[]){
    this.correos = correos;
  }

  cargarExcel(){
    this.correos.forEach(element => {
      
    })
  }
}
