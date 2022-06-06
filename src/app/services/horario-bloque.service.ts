import { Injectable } from '@angular/core';
import {BloqueModel} from "../Models/Bloque.model";

@Injectable({
  providedIn: 'root'
})
export class HorarioBloqueService
{
  private bloques =new Map<String, BloqueModel>();
  constructor()
  {
    this.iniciarBloques();
  }

  private iniciarBloques()
  {
    this.bloques.set("1",{horaInicio:8,minutoInicio:30})
    this.bloques.set("2",{horaInicio:9,minutoInicio:40})
    this.bloques.set("3",{horaInicio:10,minutoInicio:50})
    this.bloques.set("4",{horaInicio:12,minutoInicio:0})
    this.bloques.set("5",{horaInicio:13,minutoInicio:10})
    this.bloques.set("6",{horaInicio:14,minutoInicio:20})
    this.bloques.set("7",{horaInicio:15,minutoInicio:30})
    this.bloques.set("8",{horaInicio:16,minutoInicio:40})
    this.bloques.set("9",{horaInicio:17,minutoInicio:50})
    this.bloques.set("10",{horaInicio:19,minutoInicio:0})
    this.bloques.set("11",{horaInicio:20,minutoInicio:10})
    this.bloques.set("12",{horaInicio:21,minutoInicio:20})
  }

  public getBloque(bloque:String|undefined):BloqueModel
  {
    let bloqueReaspuesta;
    if (bloque != null) {
      bloqueReaspuesta = this.bloques.get(bloque)
    }
    if (typeof bloqueReaspuesta === 'undefined')
    {
      bloqueReaspuesta ={horaInicio:-1,minutoInicio:-1}
    }
    return bloqueReaspuesta
  }

}
