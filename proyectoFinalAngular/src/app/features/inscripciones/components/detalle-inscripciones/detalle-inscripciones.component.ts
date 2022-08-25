import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../../cursos/services/curso.service';
import { AlumnoService } from '../../../alumnos/services/alumno.service';
import { Alumnos } from 'src/app/models/alumnos';

@Component({
  selector: 'app-detalle-inscripciones',
  templateUrl: './detalle-inscripciones.component.html',
  styleUrls: ['./detalle-inscripciones.component.css']
})
export class DetalleInscripcionesComponent implements OnInit {
  formInscripciones: FormGroup;
  cursos$: Observable<Cursos[]> = of([] as Cursos[]);
  alumnos$: Observable<Alumnos[]> = of([] as Alumnos[]);
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetalleInscripcionesComponent>,
    private cursoService: CursoService,
    private alumnoService: AlumnoService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.formInscripciones = fb.group({
      curso: new FormControl({ value: data.inscripciones.curso, disabled: true }),
      alumno: new FormControl( { value: data.inscripciones.alumno, disabled: true })
    });
  }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
    this.cursos$ =this.cursoService.obtenerCursos();
  }

  cerrar() {
    this.dialogRef.close();
  }

  compararId(id1: any, id2: any): boolean {
    return id1.id === id2.id;
  }
}
