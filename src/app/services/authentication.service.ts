import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface cuerpoLogin
{
  rut:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService
{
  public url:String = "https://localhost:7119/api/usuario/login";

  constructor(
    private httpclient: HttpClient
  ) { }

  public login( email: string, password: string): string
  {
    let body: cuerpoLogin = {rut:email, password: password}
    // @ts-ignore
    this.httpclient.post(this.url,body,{})
    return "jaja saludos"
  }


}
