import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResponseModel} from "../Models/userResponse.model";

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

  // @ts-ignore
  public login( email: string, password: string): UserResponseModel
  {
    let body: cuerpoLogin = {rut:email, password: password}
    // @ts-ignore
    this.httpclient.post(this.url,body,{}).subscribe((respuesta:UserResponseModel) =>{
      let userResponse: UserResponseModel = {roles: respuesta.roles, token: respuesta.token}
      return userResponse
    })
  }


}
