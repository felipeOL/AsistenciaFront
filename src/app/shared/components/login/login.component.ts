import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../dialogs/error-dialog/error-dialog.component";


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
    private dialog: MatDialog,
  ) { }
  loginForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  public login(): void
  {
    this.authservice.login(this.loginForm.value.email,this.loginForm.value.password).subscribe(response => {
      let existe = true
      if(response.roles == "Teacher"){
        this.router.navigate(['/teacher-assistance']);
      }else if(response.roles == "Student"){
        this.router.navigate(['/student-schedules']);
      }else if(response.roles == "Administrator"){
        this.router.navigate(["/admin-accounts"]);
      }
      else
      {
        existe =false
        this.dialog.open(ErrorDialogComponent, {
          data:
            {
              titulo: 'Datos de inicio de sesión erroneos',
              contenido: 'No se encontró la combinacin de correo electrónico y contraseña, por favor revise sus datos.'
            }
        })
      }
      if(existe)
      {
        this.authservice.setUser(response);
      }
    })
  }
}
