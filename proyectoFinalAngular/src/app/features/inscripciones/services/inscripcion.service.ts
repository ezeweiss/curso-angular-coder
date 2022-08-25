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
  },
  {id:2,
    alumno:{
       id: 2, nombre: 'Rodolfo', apellido: 'López', fechaNacimiento: '1957-03-04', curso: 'ReactJS', comision: 22110, profesor: 'José González',matriculaAbierta: true
    },
    curso:{
      id: 2, nombreCurso: 'ReactJS', cantidadEstudiantes:75, comision: 22110
    }
  },
  {id:3,
    alumno:{
       id: 3, nombre: 'Pablo', apellido: 'Fernández', fechaNacimiento: '1998-08-09', curso: 'Wordpress', comision: 5897, profesor: 'Carlos Zambrano',matriculaAbierta: false
    },
    curso:{
      id: 3, nombreCurso: 'Wordpress', cantidadEstudiantes:90, comision: 5897
    }
  },
  {id:4,
    alumno:{
       id: 4, nombre: 'Iván', apellido: 'De Pineda', fechaNacimiento: '1975-11-30', curso: 'Marketing Digital', comision: 10257, profesor: 'Fernando Garces',matriculaAbierta: false
    },
    curso:{
      id: 4, nombreCurso: 'Marketing Digital', cantidadEstudiantes:100, comision: 10257
    }
  },
  {id:5,
    alumno:{
       id: 5, nombre: 'Marcos', apellido: 'Jerez', fechaNacimiento: '1995-11-25', curso: 'Python', comision: 5878, profesor: 'Rufino Diaz',matriculaAbierta: true
    },
    curso:{
      id: 5, nombreCurso: 'Python', cantidadEstudiantes:87, comision: 5878
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
