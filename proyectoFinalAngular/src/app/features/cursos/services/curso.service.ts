import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';

const ELEMENT_DATA: Cursos[] = [
  {id:1, nombre: 'Angular', cantidadEstudiantes: 45, comision: 2587},
  {id:2, nombre: 'ReactJs', cantidadEstudiantes: 75, comision: 3584},
  {id:3, nombre: 'Python', cantidadEstudiantes: 90, comision: 1158},
  {id:4, nombre: 'Wordpress', cantidadEstudiantes: 100, comision: 2254},
  {id:5, nombre: 'Javascript', cantidadEstudiantes: 87, comision: 5897}
  ];

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursos: Cursos[];
  cursos$: BehaviorSubject<Cursos[]>;

  constructor() {
    this.cursos = ELEMENT_DATA;
    this.cursos$ = new BehaviorSubject<Cursos[]>(this.cursos);
  }

  obtenerCursos(): Observable<Cursos[]> {
    return this.cursos$;
  }

  agregarCurso(curso: Cursos) {
    this.cursos = [...this.cursos, curso]

    this.cursos$.next(this.cursos);
  }

  editarCurso(curso: Cursos) {
    this.cursos = this.cursos.map(elemento => {
      if(elemento.id === curso.id){
        return curso;
      }else {
        return elemento;
      }
    });
    this.cursos$.next(this.cursos);
  }
  
  eliminarCurso(curso: Cursos) {
    this.cursos = this.cursos.filter(elemento => elemento.id !== curso.id);
    this.cursos$.next(this.cursos);
  }
}
