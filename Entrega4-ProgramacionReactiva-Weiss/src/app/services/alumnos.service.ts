import { Injectable } from '@angular/core';
import { filter, from, map, Observable, toArray } from 'rxjs';
import { Alumnos } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Alumnos[] = [
    {id: 1, nombre: 'Jose', apellido: 'Lopez', edad: 27},
    {id: 2, nombre: 'Pablo', apellido: 'González', edad: 30},
    {id: 3, nombre: 'Antonio', apellido: 'Perez', edad: 67},
    {id: 4, nombre: 'Ezequiel', apellido: 'Weiss', edad: 25},
  ];

  constructor() { }

  obtenerAlumnosPromesa(): Promise<Alumnos[]> {
    return new Promise((resolve,reject)=> {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }
      else{
        reject(console.log(Error));
      }      
    }); 
  }

  obtenerAlumnosMayores(): Observable<Alumnos[]> {
    return from(this.alumnos).pipe(
      map((alumno: Alumnos) => ({...alumno, nombre: alumno?.apellido?.toUpperCase()} as Alumnos)),
      filter((alumno: Alumnos) => alumno.edad > 25),
      toArray()
    );
  }

}