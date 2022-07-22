import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {
  variable: number = 10;
  alumnos  = [{
    nombre: 'Jose',
    apellido: 'López',
    edad: 30,
    curso: 'Angular'
  },
  {
    nombre: 'Pablo',
    apellido: 'González',
    edad: 25,
    curso: 'Python'
  },
  {
    nombre: 'Leandro',
    apellido: 'Perez',
    edad: 18,
    curso: 'Marketing'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor(){
    this.variable = Math.round(Math.random()*10);
  }
}
