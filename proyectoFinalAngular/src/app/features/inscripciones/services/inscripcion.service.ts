import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';
import { Inscripciones } from 'src/app/models/inscripciones';

const ELEMENT_DATA: Inscripciones[] = [
  {id:1,
      alumno:{
         id: 1, nombre: 'Ezequiel', apellido: 'Weiss', fechaNacimiento: '1997-07-01', curso: 'Angular', comision: 32110, profesor: 'Abner Garcia',matriculaAbierta: true
      },
      curso:{
        id: 1, nombreCurso: 'Angular', cantidadEstudiantes:45, comision: 32110
      }
  }

  ];

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  inscripciones: Inscripciones[];
  inscripciones$: BehaviorSubject<Inscripciones[]>;

  constructor() { 
    this.inscripciones = ELEMENT_DATA;
    this.inscripciones$ = new BehaviorSubject<Inscripciones[]>(this.inscripciones);
  }

  obtenerInscripciones(): Observable<Inscripciones[]>{
    return this.inscripciones$;
  }

  obtenerInscripcionesPorAlumno(alumno: Alumnos): Observable<Inscripciones[]>{
    return this.inscripciones$.pipe(
      map(alumnos=> alumnos.filter(inscripcion => inscripcion.alumno.id === alumno.id))
    )
  }

  obtenerInscripcionesPorCurso(curso: Cursos): Observable<Inscripciones[]>{
    return this.inscripciones$.pipe(
      map(cursos => cursos.filter(inscripcion => inscripcion.curso.id === curso.id))
    )
  }

  eliminarInscripcion(inscripcion: Inscripciones) {
    this.inscripciones = this.inscripciones.filter(elemento => elemento.id !== inscripcion.id);
    this.inscripciones$.next(this.inscripciones);
  }
}
