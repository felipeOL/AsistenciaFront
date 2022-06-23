import {ContenidoBloqueHorarioModel} from "./ContenidoBloqueHorario.model";

export interface BloqueHorarioModel
{
  bloque:string,
  horario:string,
  Lunes:ContenidoBloqueHorarioModel,
  Martes:ContenidoBloqueHorarioModel,
  Miercoles:ContenidoBloqueHorarioModel,
  Jueves:ContenidoBloqueHorarioModel,
  Viernes:ContenidoBloqueHorarioModel,
  Sabado:ContenidoBloqueHorarioModel
}
