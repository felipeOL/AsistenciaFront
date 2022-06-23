import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {ADMINROUTES, STUDENTROUTES, TEACHERROUTES} from "../../routes";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];
  user: any;
  hide: boolean = true;

  constructor(private authService:AuthenticationService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.user = this.authService.usuario;
    if(this.user.roles == "Teacher"){
      this.menuItems = TEACHERROUTES.filter(menuItem => menuItem);
      this.hide = false;
    }else if(this.user.roles == "Student"){
      this.menuItems = STUDENTROUTES.filter(menuItem => menuItem);
      this.hide = false;
    }else if(this.user.roles == "Administrator"){
      this.menuItems = ADMINROUTES.filter(menuItem => menuItem);
      this.hide = false;
    }

  }

  exit(){
    this.authService.usuario.roles = '';
    this.authService.usuario.token = '';
    this.hide = true;
    this.router.navigate(['/login']);
  }

}
