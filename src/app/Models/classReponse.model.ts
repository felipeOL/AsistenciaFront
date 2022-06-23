import {CourseResponseModel} from "./CourseResponse.model";
import {BloqueCursoModel} from "./BloqueCurso.model";

export interface classReponse{
  id?:number,
  sala?:string,
  modalidad?:string,
  bloque?:BloqueCursoModel,
  fecha?:Date,
  asistio:boolean,
  curso?:CourseResponseModel;
}
