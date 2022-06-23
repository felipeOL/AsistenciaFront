import {ProferoResposeModel} from "./ProferoRespose.model";
import {BloqueCursoModel} from "./BloqueCurso.model";

export interface CourseResponseModel
{
  id?: 0,
  codigo?: string,
  nombre?: string,
  seccion?: string,
  semestre?: string,
  bloques?: BloqueCursoModel[],
  anio?: Date,
  profesor?: ProferoResposeModel[]
}
