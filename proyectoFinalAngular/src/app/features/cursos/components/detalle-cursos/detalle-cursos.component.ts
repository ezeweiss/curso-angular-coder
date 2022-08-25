import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { InscripcionService } from 'src/app/features/inscripciones/services/inscripcion.service';
import { Inscripciones } from 'src/app/models/inscripciones';
import { Cursos } from '../../../../models/cursos';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit {
  inscripciones$: Observable<Inscripciones[]> = of([] as Inscripciones[]);
  formCursos: FormGroup;
  curso: Cursos;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetalleCursosComponent>,
    private inscripcionService: InscripcionService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.curso = data.curso;
    this.formCursos = fb.group({
      nombreCurso: new FormControl({ value: data.curso.nombreCurso, disabled: true }),
      comision: new FormControl( { value: data.curso.comision, disabled: true }),
      cantidadEstudiantes: new FormControl({ value: data.curso.cantidadEstudiantes, disabled: true })
    });
  }

  ngOnInit(): void {
    this.inscripciones$ = this.inscripcionService.obtenerInscripcionesPorCurso(this.curso);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
