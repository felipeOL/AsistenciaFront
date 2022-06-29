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

  setCorreo(correos:string[]){
    this.correos = correos;
  }
}
