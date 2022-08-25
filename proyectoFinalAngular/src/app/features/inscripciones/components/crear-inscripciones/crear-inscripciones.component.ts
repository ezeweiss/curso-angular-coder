import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';
import { Inscripciones } from '../../../../models/inscripciones';
import { AlumnoService } from '../../../alumnos/services/alumno.service';
import { CursoService } from '../../../cursos/services/curso.service';

@Component({
  selector: 'app-crear-inscripciones',
  templateUrl: './crear-inscripciones.component.html',
  styleUrls: ['./crear-inscripciones.component.css']
})
export class CrearInscripcionesComponent implements OnInit {
  cursos$: Observable<Cursos[]> = of([] as Cursos[]);
  alumnos$: Observable<Alumnos[]> = of([] as Alumnos[]);
  formInscripciones: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private dialogRef: MatDialogRef<CrearInscripcionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Inscripciones
  ) {
    this.formInscripciones = fb.group({
    curso: new FormControl('', [Validators.required, Validators.minLength(3)]),
    alumno: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
    this.cursos$ = this.cursoService.obtenerCursos();
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }


  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    this.dialogRef.close(this.formInscripciones.value);
  }
  compararId(id1: any, id2: any): boolean {
    return id1.id === id2.id;
  }
}
