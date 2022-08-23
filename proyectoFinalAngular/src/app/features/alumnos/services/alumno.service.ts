import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';

const ELEMENT_DATA: Alumnos[] = [
  {id:1, nombre: 'Ezequiel', apellido: 'Weiss', fechaNacimiento: ("1997-07-01"), curso: 'Angular', comision: 32110, profesor: 'Abner Garcia', matriculaAbierta: true},
  {id: 2,  nombre: 'Rodolfo', apellido: 'López', fechaNacimiento: '1957-03-04', curso: 'ReactJS', comision: 22110, profesor: 'José González', matriculaAbierta: true},
  {id: 3, nombre: 'Pablo', apellido: 'Fernández', fechaNacimiento: '1998-08-09', curso: 'Wordpress', comision: 5897, profesor: 'Carlos Zambrano', matriculaAbierta: false},
  {id: 4,nombre: 'Iván', apellido: 'De Pineda', fechaNacimiento: '1975-11-30', curso: 'Marketing Digital', comision: 10257, profesor: 'Fernando Garces', matriculaAbierta: false},
  {id:5, nombre: 'Marcos', apellido: 'Jerez', fechaNacimiento: '1995-11-25', curso: 'Python', comision: 5878, profesor: 'Rufino Diaz', matriculaAbierta: true}
  ];

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos: Alumnos[];
  alumnos$: BehaviorSubject<Alumnos[]>;

  constructor() {
    this.alumnos = ELEMENT_DATA;
    this.alumnos$ = new BehaviorSubject<Alumnos[]>(this.alumnos);
  }

  obtenerAlumnos(): Observable<Alumnos[]> {
    return this.alumnos$;
  }

  agregarAlumno(alumno: Alumnos) {
    this.alumnos = [...this.alumnos, alumno]

    this.alumnos$.next(this.alumnos);
  }

  editarAlumno(alumno: Alumnos) {
    this.alumnos = this.alumnos.map(elemento => {
      if(elemento.id === alumno.id){
        return alumno;
      }else {
        return elemento;
      }
    });

    this.alumnos$.next(this.alumnos);
  }
  
  eliminarAlumno(alumno: Alumnos) {
    this.alumnos = this.alumnos.filter(elemento => elemento.id !== alumno.id);
    this.alumnos$.next(this.alumnos);
  }
}
