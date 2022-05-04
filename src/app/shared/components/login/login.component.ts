import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService
  ) { }
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public login(): void
  {
    let respuestas: String
    respuestas=this.authservice.login(this.loginForm.value.email,this.loginForm.value.password)
    console.log(respuestas)
  }
}
