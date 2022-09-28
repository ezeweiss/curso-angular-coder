import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuarios } from 'src/app/models/usuarios';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UsuarioService } from '../../usuarios/services/usuario.service';
import { SesionState } from 'src/app/models/sesion.state';
import { Store } from '@ngrx/store';
import { crearSesion } from 'src/app/core/state/actions/sesion.action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private sesionSubject!: BehaviorSubject<Sesion>
  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private spinnerService: SpinnerService,
    private usuarioService: UsuarioService,
    private store: Store<SesionState>
  ) {
    const sesion: Sesion = {
      sesionActiva: false
    };
    this.sesionSubject = new BehaviorSubject(sesion);
  }
  
  cerrarSesion(){
    const sesion: Sesion = {
      sesionActiva: false
    };
    sessionStorage.setItem("sesion",JSON.stringify(sesion));
  }

  obtenerSesion(){
    return this.sesionSubject.asObservable();
  }

  iniciarSesion(usuario: string, contrasena: string) {
    this.spinnerService.cargandoTrue();
    this.usuarioService.login(usuario,contrasena).pipe(
      catchError(this.manejarError)
    ).subscribe((matchedUser: Usuarios) => {
      this.spinnerService.cargandoFalse();

      if (matchedUser) {
        const sesion: Sesion = {
          sesionActiva: true,
          usuario: {
            ...matchedUser
          }
        }
        sessionStorage.setItem("sesion",JSON.stringify(sesion));
        this.store.dispatch(crearSesion({usuario:matchedUser}))
        this.router.navigate(['core']);

      } else {
        this.toastr.error('Credenciales inválidas');
        this.router.navigate(['login']);
      }
    });
  }
  
  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servicor', error.status, error.message)
      alert('Hubo un error de comunnicacion, intente de nuevo')
    }
    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
  
}