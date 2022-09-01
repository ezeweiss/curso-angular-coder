import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './features/auth/services/auth.service';
import { Sesion } from './models/sesion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = true;
  isExpanded: boolean = true;
  sesion$!: Observable<Sesion>;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.sesion$ = this.authService.obtenerSesion();
  }

  cerrarSesion(){
    this.authService.cerrarSesion();
    this.router.navigate(['auth/login']);
  }
}
