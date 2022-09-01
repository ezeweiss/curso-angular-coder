import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
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
