import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../shared/components/dialogs/error-dialog/error-dialog.component";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private dialog: MatDialog,
    private router: Router,
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
          titulo: "Error "+error.status,
          contenido: error.error
        }
    })
    if(error.status == 401){
      this.router.navigate(['/login']);
    }
  }
}
