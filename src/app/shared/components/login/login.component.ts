import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {UserResponseModel} from "../../../Models/userResponse.model";

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
    email: new FormControl('', [Validators.required]),
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public login(): void
  {
    let respuestas: UserResponseModel
    respuestas=this.authservice.login(this.loginForm.value.email,this.loginForm.value.password)
    console.dir(respuestas)
  }
}
