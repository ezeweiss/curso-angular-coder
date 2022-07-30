import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

    formularioContactoAlumnos = new FormGroup ({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required,Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    console.log(this.formularioContactoAlumnos);
  }
}
