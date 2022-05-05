import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserResponse} from "../Models/userResponse.model";
import {Observable, of} from "rxjs";
import {LoginRequest} from "../Models/loginRequest.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService
{
  usuario:UserResponse = {
    roles : '',
    token : '',
  }
  public url:String = "https://localhost:7119/api/usuario/";

  constructor(
    private httpclient: HttpClient
  ) {}



  // @ts-ignore
  public login( email: string, password: string): Observable<UserResponse>
  {
    let body: LoginRequest = {rut:email, password: password}
    return this.httpclient.post<UserResponse>(this.url+"login",body,{})
  }

  setUser(user:UserResponse){
    this.usuario = user;
    console.dir(this.usuario);
  }


}
