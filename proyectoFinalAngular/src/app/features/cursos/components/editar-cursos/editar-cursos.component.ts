import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../services/curso.service';

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
    private cursoService: CursoService,
    @Inject(MAT_DIALOG_DATA) public data: Cursos
  ) { 
    this.formCursos = fb.group({
      nombreCurso: new FormControl(data.nombreCurso, [Validators.required]),
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
    const curso: Cursos = {
      id: this.data.id,
      nombreCurso: this.formCursos.value.nombreCurso,
      comision: this.formCursos.value.comision,
      cantidadEstudiantes: this.formCursos.value.cantidadEstudiantes
    }
    this.cursoService.modificarCurso(curso).subscribe((curso: Cursos) => {
      this.dialogRef.close(curso);
    })
  }
}
