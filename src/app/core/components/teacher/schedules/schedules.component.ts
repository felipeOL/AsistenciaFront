import { Component, OnInit } from '@angular/core';
import {BloqueHorarioModel} from "../../../../Models/BloqueHorario.model";
import {ContenidoBloqueHorarioModel} from "../../../../Models/ContenidoBloqueHorario.model";
import {teacherFacade} from "../../facade/teacher.facade";

const bloqueP: ContenidoBloqueHorarioModel = {
  nombrecurso:"prueba 1",
  seccioncurso:"A",
  nombreprofesor:"juanito perez",
  emailprofesor:"jperez@utalca.cl",
  dia:"Lunes",
  bloque:"1"
}

const bloqueS: ContenidoBloqueHorarioModel = {
  nombrecurso:"",
  seccioncurso:"",
  nombreprofesor:"",
  emailprofesor:"",
  dia:"",
  bloque:""
}

const hoario: BloqueHorarioModel[] = [
  {
    bloque:"1",
    horario:"8:30 - 9:30",
    Lunes: bloqueS,
    Martes:bloqueP,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"2",
    horario:"9:40 - 10:40",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueP,
    Jueves:bloqueP,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"3",
    horario:"10:50 - 11:50",
    Lunes:bloqueP,
    Martes:bloqueS,
    Miercoles:bloqueP,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"4",
    horario:"12:00 - 13:00",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueP,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"5",
    horario:"13:10 - 14:10",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueP,
  },
  {
    bloque:"6",
    horario:"14:20 - 15:20",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueP,
    Sabado:bloqueS,
  },
  {
    bloque:"7",
    horario:"15:30 - 16:30",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueP,
    Sabado:bloqueS,
  },
  {
    bloque:"8",
    horario:"16:40 - 17:40",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"9",
    horario:"17:50 - 18:50",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueP,
    Sabado:bloqueS,
  },
  {
    bloque:"10",
    horario:"19:00 - 20:00",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"11",
    horario:"20:10 - 21:10",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"12",
    horario:"21:20 - 22:20",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
]
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  miHorario: ContenidoBloqueHorarioModel[]
  displayedColumns: string[]=['bloque','lunes', 'martes','miercoles','jueves','viernes','sabado'];
  dataSource : BloqueHorarioModel[]=hoario
  constructor(private techarFacade: teacherFacade)
  {
    //falta observar
    this.miHorario = this.techarFacade.getSchudeles()
    console.log(this.miHorario)
  }

  ngOnInit(): void
  {
  }


}
