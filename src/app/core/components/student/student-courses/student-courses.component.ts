import { Component, OnInit } from '@angular/core';
import {ContenidoBloqueHorarioModel} from "../../../../Models/ContenidoBloqueHorario.model";
import {BloqueHorarioModel} from "../../../../Models/BloqueHorario.model";
import {Subscription} from "rxjs";
import {studentFacade} from "../../facade/student.facade";

const bloqueS: ContenidoBloqueHorarioModel = {
  nombrecurso:'',
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
    Martes:bloqueS,
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
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"3",
    horario:"10:50 - 11:50",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"4",
    horario:"12:00 - 13:00",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
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
    Sabado:bloqueS,
  },
  {
    bloque:"6",
    horario:"14:20 - 15:20",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
    Sabado:bloqueS,
  },
  {
    bloque:"7",
    horario:"15:30 - 16:30",
    Lunes:bloqueS,
    Martes:bloqueS,
    Miercoles:bloqueS,
    Jueves:bloqueS,
    Viernes:bloqueS,
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
    Viernes:bloqueS,
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
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss']
})
export class StudentCoursesComponent implements OnInit {

  mostrar:boolean = false
  miHorarioSuscription!: Subscription
  displayedColumns: string[]=['bloque','lunes', 'martes','miercoles','jueves','viernes','sabado'];
  dataSource : BloqueHorarioModel[]=hoario
  constructor( private studentFacade:studentFacade) { }

  ngOnInit(): void
  {
    this.miHorarioSuscription = this.studentFacade.suscribeSchudeles().subscribe(
      data =>
      {
        hoario.forEach(element =>
        {
          element.Lunes = bloqueS;
          element.Martes = bloqueS;
          element.Miercoles =bloqueS;
          element.Jueves = bloqueS;
          element.Viernes = bloqueS;
          element.Sabado = bloqueS
        })
        console.log(data)
        data.forEach(element => {
          let bloque = this.dataSource.find(bloque => bloque.bloque == element.bloque)
          if(typeof bloque != 'undefined')
          {
            this.modificarHorario(bloque,element)
          }
        })
        if (data.length)
        {
          this.mostrar=true
        }
      }
    )
    this.studentFacade.getSchudeles()
  }

  private modificarHorario(bloque: BloqueHorarioModel, contenido:ContenidoBloqueHorarioModel)
  {
    switch (contenido.dia)
    {
      case "Lunes":
        bloque.Lunes =contenido
        break;
      case "Martes":
        bloque.Martes=contenido
        break;
      case "Miercoles":
        bloque.Miercoles=contenido
        break;
      case "Jueves":
        bloque.Jueves=contenido
        break;
      case "Viernes":
        bloque.Viernes=contenido
        break;
      case "Sabado":
        bloque.Sabado=contenido
        break;
      default:
        console.log("error")
    }
  }

}
