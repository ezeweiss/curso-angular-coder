import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
    admin: new FormControl(true)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    const usuario: Usuarios = {
      usuario: this.formLogin.value.usuario,
      contrasena: this.formLogin.value.contrasena,
      admin: this.formLogin.value.admin,
      id: '1'
    }

    this.authService.iniciarSesion(usuario);
    this.router.navigate(['home']);
  }
}


