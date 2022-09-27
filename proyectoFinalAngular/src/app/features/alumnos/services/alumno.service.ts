import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos$: BehaviorSubject<Alumnos[]>;
  private api: string = environment.api;

  constructor(
    private http: HttpClient
  ) {
    this.alumnos$ = new BehaviorSubject<Alumnos[]>([]);
  }

  obtenerAlumnos():Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(`${this.api}/alumnos`);
  }

  fetchAlumnos() {
    return this.http.get<Alumnos[]>(`${this.api}/alumnos`);
  }

  agregarAlumno(alumno: Alumnos) {
    return this.http.post<Alumnos>(`${this.api}/alumnos`, alumno);
  }
  
  modificarAlumno(alumno: Alumnos){
    return this.http.put<Alumnos>(`${this.api}/alumnos/${alumno.id}`, alumno);
  }

  eliminarAlumno(id: string){
    return this.http.delete<Alumnos>(`${this.api}/alumnos/${id}`)
  }
}
