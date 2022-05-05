import {RouteInfo} from "../Models/routeInfo.model";

export const TEACHERROUTES: RouteInfo[] = [
  {path:'/teacher-assistance',title:'Asistencia',class:''},
  {path:'/teacher-courses',title:'Cursos',class:''},
  {path:'/teacher-schedules',title:'Horario',class:''},
]

export const STUDENTROUTES: RouteInfo[] = [
  {path:'/student-dashboard',title:'Dashboard',class:''},
]

export const ADMINROUTES: RouteInfo[] = [
  {path:'/admin-dashboard',title:'Dashboard',class:''},
]
