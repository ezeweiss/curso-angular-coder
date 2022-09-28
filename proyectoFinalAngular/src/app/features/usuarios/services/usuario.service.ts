import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api: string = environment.api;

  constructor(private http: HttpClient) { }


  login(usuario: string, contrasena: string) {
    return this.fetchUsuarios().pipe(map((usuarios: Usuarios[])=> {
      return usuarios.filter(
        usuarios => usuarios.usuario === usuario && usuarios.contrasena ===contrasena
      )[0]
    }));
  }

  fetchUsuarios(){
    return this.http.get<Usuarios[]>(`${this.api}/usuarios`);
  }
  
  obtenerUsuarios():Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(`${this.api}/usuarios`);
  }

  agregarUsuario(usuario: Usuarios) {
    return this.http.post<Usuarios>(`${this.api}/usuarios`, usuario);
  }
  
  modificarUsuario(usuario: Usuarios){
    return this.http.put<Usuarios>(`${this.api}/usuarios/${usuario.id}`, usuario);
  }

  eliminarUsuario(id: string){
    return this.http.delete<Usuarios>(`${this.api}/usuarios/${id}`)
  }
}
