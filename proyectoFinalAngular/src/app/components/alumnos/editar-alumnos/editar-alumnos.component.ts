import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models/alumnos';


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
    @Inject(MAT_DIALOG_DATA) public data: Alumnos
  ) { 
    this.formAlumnos = fb.group({
      id: new FormControl(data.id, [Validators.required]),
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]), 
      fechaNacimiento: new FormControl(data.fechaNacimiento, [Validators.required]),
      curso: new FormControl(data.curso, [Validators.required]),
      comision: new FormControl(data.comision, [Validators.required]),
      profesor: new FormControl(data.profesor, [Validators.required]),
      matriculaAbierta: new FormControl(data.matriculaAbierta, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  actualizar(){
    this.dialogRef.close(this.formAlumnos.value);
  }
}
