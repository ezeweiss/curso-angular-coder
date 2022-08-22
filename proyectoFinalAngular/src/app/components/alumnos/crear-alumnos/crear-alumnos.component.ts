import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models/alumnos';


@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {
  formAlumnos: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) {
    this.formAlumnos = fb.group({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fechaNacimiento: new FormControl('', Validators.required),
    curso: new FormControl('', [Validators.required, Validators.minLength(2)]),
    comision: new FormControl('', [Validators.required]),
    profesor: new FormControl('', [Validators.required, Validators.minLength(3)]),
    matriculaAbierta: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }


  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    this.dialogRef.close(this.formAlumnos.value);
  }
}
