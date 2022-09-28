import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('Verda_Ebert', [Validators.required]),
    contrasena: new FormControl('1234', [Validators.required]),
    // admin: new FormControl(true)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.iniciarSesion(this.formLogin.value.usuario,this.formLogin.value.contrasena);
  }
}


