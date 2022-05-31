import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../shared/components/dialogs/error-dialog/error-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private dialog: MatDialog
  ) { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    // @ts-ignore
    return next.handle(req).pipe(
      catchError( err => this.capturaError(err))
    );
  }

  // @ts-ignore
  capturaError( error: HttpErrorResponse):string
  {
    console.log(error)
    this.dialog.open(ErrorDialogComponent, {
      data:
        {
          titulo: error.statusText,
          contenido: error.error
        }
    })
    return "e"
  }
}
