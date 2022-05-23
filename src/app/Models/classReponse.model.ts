import {CourseResponseModel} from "./CourseResponse.model";

export interface classReponse{
  idCurso?:number,
  sala?:string,
  modalidad?:string,
  bloque?:string,
  fecha?:Date,
  course?:CourseResponseModel;
}
