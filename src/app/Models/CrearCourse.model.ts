import {BloqueCursoModel} from "./BloqueCurso.model";

export interface CrearCourseModel{
  idprofesor?:string;
  codigo?:string;
  nombre?:string;
  seccion?:string;
  semestre?:string;
  bloques: BloqueCursoModel[];
  anio?:Date;
}
