import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide=true

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService,
    private router: Router,
  ) { }
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required]),
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public login(): void
  {
    this.authservice.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(response => {
      this.authservice.setUser(response);
      console.dir(response.roles)
      if(response.roles == "Teacher"){
        this.router.navigate(['/teacher-dashboard']);
      }else if(response.roles == "Student"){
        this.router.navigate(['/student-dashboard']);
      }else if(response.roles == "Administrator"){
        this.router.navigate(["/admin-dashboard"]);
      }
    })
  }
}
