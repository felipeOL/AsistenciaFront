import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {UserResponse} from "../Models/userResponse.model";
import {catchError, Observable, of} from "rxjs";
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
  public url:String = "http://localhost:5000/api/usuario/login";

  constructor(
    private httpclient: HttpClient
  ) {}



  // @ts-ignore
  public login( email: string, password: string): Observable<UserResponse>
  {
    let body: LoginRequest = {email:email, contraseña: password}
    // @ts-ignore
    return this.httpclient.post<UserResponse>(this.url,body,{}).pipe(
      catchError(err => this.getlogineror(err)))

  }

  setUser(user:UserResponse){
    this.usuario = user;
    console.dir(this.usuario);
  }

  private getlogineror(error: HttpErrorResponse):string {
    return "a"

  }


}
