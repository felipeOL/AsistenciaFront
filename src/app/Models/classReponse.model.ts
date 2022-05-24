import {CourseResponseModel} from "./CourseResponse.model";

export interface classReponse{
  id?:number,
  sala?:string,
  modalidad?:string,
  bloque?:string,
  fecha?:Date,
  asistio:boolean,
  curso?:CourseResponseModel;
}
