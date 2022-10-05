import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = '';
  titulo$!: Observable<string>;

  constructor(private authService: AuthService,
              private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.authService.obtenerSesion().subscribe({
      next: (sesion) => {
        if (sesion.usuario) {
          this.userName = sesion.usuario.usuario;
        }
      }
    });
    this.titulo$ = this.headerService.getTitulo();
  }
}
