import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    console.log('paso por aqui XD')
    return next.handle(req);
  }
}
