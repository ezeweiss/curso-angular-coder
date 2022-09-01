import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { Sesion } from 'src/app/models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.toastr.error("Debe logearse para poder acceder a la sección");
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      );
  }
  
}
