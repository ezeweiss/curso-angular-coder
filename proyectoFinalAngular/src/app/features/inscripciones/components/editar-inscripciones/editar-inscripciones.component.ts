import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { AlumnoService } from 'src/app/features/alumnos/services/alumno.service';
import { CursoService } from 'src/app/features/cursos/services/curso.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';

@Component({
  selector: 'app-editar-inscripciones',
  templateUrl: './editar-inscripciones.component.html',
  styleUrls: ['./editar-inscripciones.component.css']
})
export class EditarInscripcionesComponent implements OnInit {
  formInscripciones: FormGroup;
  cursos$: Observable<Cursos[]> = of([] as Cursos[]);
  alumnos$: Observable<Alumnos[]> = of([] as Alumnos[]);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarInscripcionesComponent>,
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.formInscripciones = fb.group({
      curso: new FormControl(data.inscripcion.curso, [Validators.required]),
      alumno: new FormControl(data.inscripcion.alumno, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  actualizar() {
    if (this.formInscripciones.status === "VALID") {
      this.dialogRef.close({id: this.data.inscripcion.id, ...this.formInscripciones.value});
    } else {
      this.formInscripciones.markAllAsTouched();
    }
    console.log(this.formInscripciones);
  }

  cerrar() {
    this.dialogRef.close();
  }

  compararId(id1: any, id2: any): boolean {
    return id1.id === id2.id;
  }

}
