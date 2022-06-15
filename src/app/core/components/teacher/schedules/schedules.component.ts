import { Component, OnInit } from '@angular/core';
import {BloqueHorarioModel} from "../../../../Models/BloqueHorario";
import {ContenidoBloqueHorarioModel} from "../../../../Models/ContenidoBloqueHorario.model";

const bloqueP: ContenidoBloqueHorarioModel = {
  bloque:"1",
  curso:"prueba 1",
  sala:21,
  profesor:"juanito perez"
}

const bloqueS: ContenidoBloqueHorarioModel = {
  bloque:" ",
  curso:" ",
  profesor:" "
}

const hoario: BloqueHorarioModel[] = [
  {
    bloque:"8:30 - 9:30",
    lunes: {bloque:" ", curso:" ", profesor:" "},
    martes:{ bloque:"1", curso:"prueba 1", sala:21, profesor:"juanito perez"},
    miercoles:{bloque:" ", curso:" ", profesor:" "},
    jueves:{bloque:" ", curso:" ", profesor:" "},
    viernes:{bloque:" ", curso:" ", profesor:" "},
    sabado:{bloque:" ", curso:" ", profesor:" "},
  },
  {
    bloque:"9:40 - 10:40",
    lunes:bloqueS,
    martes:bloqueS,
    miercoles:bloqueP,
    jueves:bloqueP,
    viernes:bloqueS,
    sabado:bloqueS,
  },
  {
    bloque:"10:50 - 11:50",
    lunes:bloqueP,
    martes:bloqueS,
    miercoles:bloqueP,
    jueves:bloqueS,
    viernes:bloqueS,
    sabado:bloqueS,
  },
  {
    bloque:"12:00 - 13:00",
    lunes:bloqueS,
    martes:bloqueS,
    miercoles:bloqueP,
    jueves:bloqueS,
    viernes:bloqueS,
    sabado:bloqueS,
  },
  {
    bloque:"13:10 - 14:10",
    lunes:bloqueS,
    martes:bloqueS,
    miercoles:bloqueS,
    jueves:bloqueS,
    viernes:bloqueS,
    sabado:bloqueS,
  },
  {
    bloque:"14:20 - 15:20",
    lunes:bloqueS,
    martes:bloqueS,
    miercoles:bloqueS,
    jueves:bloqueS,
    viernes:bloqueP,
    sabado:bloqueS,
  },
]
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  displayedColumns: string[]=['bloque','lunes', 'martes','miercoles','jueves','viernes','sabado'];
  dataSource : BloqueHorarioModel[]=hoario
  constructor() { }

  ngOnInit(): void {}

}
