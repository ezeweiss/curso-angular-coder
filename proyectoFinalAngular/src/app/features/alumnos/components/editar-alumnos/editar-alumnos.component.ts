import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models/alumnos';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {
  formAlumnos: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarAlumnosComponent>,
    private alumnoService: AlumnoService,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) { 
    this.formAlumnos = fb.group({
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]), 
      fechaNacimiento: new FormControl(data.fechaNacimiento, [Validators.required]),
      email: new FormControl(data.email, [Validators.required, Validators.email]),
      matriculaAbierta: new FormControl(data.matriculaAbierta, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  actualizar(){
    const alumno: Alumnos = {
      id: this.data.id,
      nombre: this.formAlumnos.value.nombre,
      apellido: this.formAlumnos.value.apellido,
      fechaNacimiento: this.formAlumnos.value.fechaNacimiento,
      email: this.formAlumnos.value.email,
      matriculaAbierta: this.formAlumnos.value.matriculaAbierta
    }
    this.alumnoService.modificarAlumno(alumno).subscribe((alumno: Alumnos) => {
      this.dialogRef.close(alumno);
    })
  }
}
