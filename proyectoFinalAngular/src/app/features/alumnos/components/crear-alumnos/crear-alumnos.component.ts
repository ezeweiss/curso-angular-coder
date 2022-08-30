import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models/alumnos';
import { AlumnoService } from '../../services/alumno.service';

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
    private alumnoService: AlumnoService,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) {
    this.formAlumnos = fb.group({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fechaNacimiento: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    matriculaAbierta: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }


  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    const alumno: Alumnos = {
      id: '',
      nombre: this.formAlumnos.value.nombre,
      apellido: this.formAlumnos.value.apellido,
      fechaNacimiento: this.formAlumnos.value.fechaNacimiento,
      email: this.formAlumnos.value.email,
      matriculaAbierta: this.formAlumnos.value.matriculaAbierta
    }
    this.alumnoService.agregarAlumno(alumno).subscribe((alumno: Alumnos) => {
      this.dialogRef.close(alumno);
    })
  }
}
