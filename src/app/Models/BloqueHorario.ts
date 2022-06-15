import {ContenidoBloqueHorarioModel} from "./ContenidoBloqueHorario.model";

export interface BloqueHorarioModel
{
  bloque:String,
  lunes:ContenidoBloqueHorarioModel,
  martes:ContenidoBloqueHorarioModel,
  miercoles:ContenidoBloqueHorarioModel,
  jueves:ContenidoBloqueHorarioModel,
  viernes:ContenidoBloqueHorarioModel,
  sabado:ContenidoBloqueHorarioModel
}
