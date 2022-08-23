import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  formCursos: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cursos
  ) { 
    this.formCursos = fb.group({
      nombre: new FormControl(data.nombre, [Validators.required]),
      comision: new FormControl(data.comision, [Validators.required]), 
      cantidadEstudiantes: new FormControl(data.cantidadEstudiantes, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  actualizar(){
    // this.dialogRef.close(this.formAlumnos.value);
    if(this.formCursos.status === "VALID"){
      this.dialogRef.close({id:this.data.id, ...this.formCursos.value});
    }else{
      this.formCursos.markAllAsTouched();
    }
  }
}
