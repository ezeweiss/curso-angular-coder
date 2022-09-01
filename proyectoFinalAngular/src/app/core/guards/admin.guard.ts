import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { AuthService } from '../../features/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.usuario?.admin){
            return true;
          }else{
            this.toastr.error("No tiene permisos de Administrador")
            this.router.navigate(['home']);
            return false;
          }
        })
      );
  }
  
}
