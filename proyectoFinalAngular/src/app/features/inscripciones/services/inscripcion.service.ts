import { Injectable } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable, take } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';
import { Inscripciones } from 'src/app/models/inscripciones';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private api: string = environment.api;
  inscripciones$: BehaviorSubject<Inscripciones[]>

  constructor(
    private http: HttpClient
  ) { 
    this.inscripciones$ = new BehaviorSubject<Inscripciones[]>([]);
  }

 buscarInscripciones(): Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${this.api}/inscripciones`);
  }

  obtenerInscripcionPorId(id: string) {
    return this.http.get<Inscripciones>(`${this.api}/inscripciones/${id}`);
  }

  obtenerInscripciones(): Observable<Inscripciones[]> {
    this.buscarInscripciones().subscribe(res => {
      this.inscripciones$.next(res);
    });
    return this.inscripciones$;
  }

  obtenerInscripcionesPorAlumno(alumno: Alumnos):Observable<Inscripciones[]>{
    return this.obtenerInscripciones().pipe(
      map(listaInscripciones => listaInscripciones.filter(inscripcion => inscripcion.alumno.id == alumno.id))
    )
  }

  editarInscripcion(inscripcion: Inscripciones) {
    return this.http.put<Inscripciones>(`${this.api}/inscripciones/${inscripcion.id}`, inscripcion);
  }

  obtenerInscripcionesPorCurso(curso: Cursos):Observable<Inscripciones[]>{
    return this.obtenerInscripciones().pipe(
      map(listaInscripciones => listaInscripciones.filter(inscripcion => inscripcion.curso.id == curso.id))
    )
  }

  eliminarInscripcion(id: string){
    return this.http.delete<Inscripciones>(`${this.api}/inscripciones/${id}`);
  }

  editar(item: Inscripciones) : Observable<Inscripciones[]>{
    return this.editarInscripcion(item).pipe(mergeMap(() => this.obtenerInscripciones()), take(1));
  }

  agregarInscripcion(inscripcion: Inscripciones) {
    return this.http.post<Inscripciones>(`${this.api}/inscripciones`, inscripcion);
  }

  agregar(item: Inscripciones) : Observable<Inscripciones[]>{
    return this.agregarInscripcion(item)
      .pipe(mergeMap(() => this.obtenerInscripciones()), take(1));
  }

  remove(): (item: any) => Observable<any> {
    return (item: Cursos): Observable<Inscripciones[]> =>
      this.eliminarInscripcion(item.id).pipe(mergeMap(() => this.obtenerInscripciones()), take(1));
  }
}
