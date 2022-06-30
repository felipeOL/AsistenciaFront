import {RouteInfo} from "../Models/routeInfo.model";

export const TEACHERROUTES: RouteInfo[] = [
  {path:'/teacher-assistance',title:'Asistencia',class:''},
  {path:'/teacher-courses',title:'Cursos',class:''},
  {path:'/teacher-schedules',title:'Horario',class:''},
]

export const STUDENTROUTES: RouteInfo[] = [
  {path:'/student-schedules',title:'Cursos',class:''},
  {path:'/student-assistance',title:'Clases',class:''},
  {path:'/student-courses',title:'Horario',class:''},
]

export const ADMINROUTES: RouteInfo[] = [
  {path:'/admin-courses',title:'Cursos',class:''},
  {path:'/admin-accounts',title:'Cuentas',class:''},
  {path:'/periods', title:'Periodos',class:''}
]
