import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) {
  }

  obtenerCursos():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(`${this.api}/cursos`);
  }

  agregarCurso(curso: Cursos) {
    return this.http.post<Cursos>(`${this.api}/cursos`, curso);
  }
  
  modificarCurso(curso: Cursos){
    return this.http.put<Cursos>(`${this.api}/cursos/${curso.id}`, curso);
  }

  eliminarCurso(id: string){
    return this.http.delete<Cursos>(`${this.api}/cursos/${id}`)
  }
}
