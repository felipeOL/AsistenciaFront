import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true
  constructor(
    private formBuilder: FormBuilder
  ) { }
  loginForm = this.formBuilder.group({})

  ngOnInit(): void {
  }

}
