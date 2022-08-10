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
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido), 
      fechaNacimiento: new FormControl(data.fechaNacimiento),
      curso: new FormControl(data.curso),
      comision: new FormControl(data.comision),
      profesor: new FormControl(data.profesor),
      matriculaAbierta: new FormControl(data.matriculaAbierta)
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
