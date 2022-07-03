import {BloqueCursoModel} from "./BloqueCurso.model";

export interface CrearCourseModel{
  idprofesor?:string;
  codigo?:string;
  nombre?:string;
  seccion?:string;
  semestre?:string;
  idperiodo:number;
  bloques: BloqueCursoModel[];
  anio?:Date;
}
