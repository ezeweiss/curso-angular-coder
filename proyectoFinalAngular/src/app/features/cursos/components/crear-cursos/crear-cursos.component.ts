import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {
  formCursos: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearCursosComponent>,
    private cursoService: CursoService, 
    @Inject(MAT_DIALOG_DATA) public data: Cursos
  ) {
    this.formCursos = fb.group({
    nombreCurso: new FormControl('', [Validators.required, Validators.minLength(3)]),
    comision: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cantidadEstudiantes: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }


  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    const curso: Cursos = {
      id: '',
      nombreCurso: this.formCursos.value.nombreCurso,
      comision: this.formCursos.value.comision,
      cantidadEstudiantes: this.formCursos.value.cantidadEstudiantes
    }
    this.cursoService.agregarCurso(curso).subscribe((curso: Cursos) => {
      this.dialogRef.close(curso);
    })
    // this.dialogRef.close(this.formCursos.value);
  }

}
