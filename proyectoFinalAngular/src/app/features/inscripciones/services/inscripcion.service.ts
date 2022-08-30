import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';
import { Inscripciones } from 'src/app/models/inscripciones';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

// const ELEMENT_DATA: Inscripciones[] = [
//   {id:1,
//       alumno:{
//          id: '1', nombre: 'Ezequiel', apellido: 'Weiss', fechaNacimiento: '1997-07-01', email:'',matriculaAbierta: true
//       },
//       curso:{
//         id: '1', nombreCurso: 'Angular', cantidadEstudiantes:45, comision: 32110
//       }
//   },
//   {id:2,
//     alumno:{
//        id: '2', nombre: 'Rodolfo', apellido: 'López', fechaNacimiento: '1957-03-04', email:'',matriculaAbierta: true
//     },
//     curso:{
//       id: '2', nombreCurso: 'ReactJS', cantidadEstudiantes:75, comision: 22110
//     }
//   },
//   {id:3,
//     alumno:{
//        id: '3', nombre: 'Pablo', apellido: 'Fernández', fechaNacimiento: '1998-08-09', email:'',matriculaAbierta: false
//     },
//     curso:{
//       id: '3', nombreCurso: 'Wordpress', cantidadEstudiantes:90, comision: 5897
//     }
//   },
//   {id:4,
//     alumno:{
//        id: '4', nombre: 'Iván', apellido: 'De Pineda', fechaNacimiento: '1975-11-30', email:'',matriculaAbierta: false
//     },
//     curso:{
//       id: '4', nombreCurso: 'Marketing Digital', cantidadEstudiantes:100, comision: 10257
//     }
//   },
//   {id:5,
//     alumno:{
//        id: '5', nombre: 'Marcos', apellido: 'Jerez', fechaNacimiento: '1995-11-25', email:'',matriculaAbierta: true
//     },
//     curso:{
//       id: '5', nombreCurso: 'Python', cantidadEstudiantes:87, comision: 5878
//     }
//   }
// ];

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private api: string = environment.api;
  // inscripciones: Inscripciones[];
  // inscripciones$: BehaviorSubject<Inscripciones[]>;

  constructor(
    private http: HttpClient
  ) { 
    // this.inscripciones = ELEMENT_DATA;
    // this.inscripciones$ = new BehaviorSubject<Inscripciones[]>(this.inscripciones);
  }

  obtenerInscripciones(): Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${this.api}/inscripciones`);
  }


  obtenerInscripcionesPorAlumno(alumno: Alumnos):Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${this.api}/inscripciones/${alumno.nombre}`);
  }

  obtenerInscripcionesPorCurso(curso: Cursos):Observable<Inscripciones[]>{
    return this.http.get<Inscripciones[]>(`${this.api}/inscripciones/${curso.nombreCurso}`);
  }

  // obtenerInscripcionesPorCurso(curso: Cursos): Observable<Inscripciones[]>{
  //   return this.inscripciones$.pipe(
  //     map(cursos => cursos.filter(inscripcion => inscripcion.curso.id === curso.id))
  //   )
  // }
  eliminarInscripcion(id: string){
    return this.http.delete<Inscripciones>(`${this.api}/inscripciones/${id}`);
  }
  // eliminarInscripcion(inscripcion: Inscripciones) {
  //   this.inscripciones = this.inscripciones.filter(elemento => elemento.id !== inscripcion.id);
  //   this.inscripciones$.next(this.inscripciones);
  // }
}
