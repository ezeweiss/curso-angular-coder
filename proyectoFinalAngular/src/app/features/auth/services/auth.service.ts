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
    this.sesionSubject.next(sesion);
  }

  obtenerSesion(){
    return this.sesionSubject.asObservable();
  }



  iniciarSesion(usuario: Usuarios){
    this.http.get<Usuarios[]>(`${this.api}/usuarios`).pipe(
      map((usuarios: Usuarios[]) => {
        return usuarios.filter((u: Usuarios) => u.usuario === usuario.usuario && u.contrasena === usuario.contrasena)[0];
      })
    ).pipe(
      catchError(this.manejarError)
    ).subscribe((usuario: Usuarios) => {
      if(usuario){
        const sesion: Sesion = {
          sesionActiva: true,
          usuario: {
            id: usuario.id,
            usuario: usuario.usuario,
            contrasena: usuario.contrasena,
            admin: usuario.admin
          }
        }
    
        this.sesionSubject.next(sesion);

      }else{
        this.toastr.error("El usuario no existe");
        this.router.navigate(['auth/login']);
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