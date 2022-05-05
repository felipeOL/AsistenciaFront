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
    email: new FormControl('', [Validators.required]),
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public login(): void
  {
    this.authservice.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(response => {
      this.authservice.setUser(response);
    })
  }
}
