import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'asistenciaFront';

  fullscreenRoute: boolean = false;


  constructor(private _router:Router) {
  }

  ngOnInit(){
    this._router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe( event => {
      if(event.urlAfterRedirects === "/login"){
        this.fullscreenRoute = true;
      }else{
        this.fullscreenRoute = false;
      }
    })
  }
}
