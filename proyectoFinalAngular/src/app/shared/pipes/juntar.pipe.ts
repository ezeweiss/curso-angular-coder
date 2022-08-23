import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos';

@Pipe({
  name: 'juntar'
})
export class JuntarPipe implements PipeTransform {

  transform(value: Alumnos, ...args: unknown[]): unknown {
    
    return value.apellido.toUpperCase() + ' ' + value.nombre;
    }

}
