import {ProferoResposeModel} from "./ProferoRespose.model";

export interface CourseResponseModel
{
  id?: 0,
  codigo?: string,
  nombre?: string,
  seccion?: string,
  semestre?: string,
  bloque?: string,
  anio?: Date,
  profesor?: ProferoResposeModel[]
}
