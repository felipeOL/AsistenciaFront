import {BloqueCursoModel} from "./BloqueCurso.model";

export interface crearClaseModel{
  idCurso?:number,
  sala?:string,
  modalidad?:string,
  bloque:BloqueCursoModel,
  fecha?:Date,
}
