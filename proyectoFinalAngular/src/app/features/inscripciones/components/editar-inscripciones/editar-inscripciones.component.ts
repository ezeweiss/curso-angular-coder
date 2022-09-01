import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlumnoService } from 'src/app/features/alumnos/services/alumno.service';
import { CursoService } from 'src/app/features/cursos/services/curso.service';
import { Alumnos } from 'src/app/models/alumnos';
import { Cursos } from 'src/app/models/cursos';
import { InscripcionService } from '../../services/inscripcion.service';
import { Inscripciones } from '../../../../models/inscripciones';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-inscripciones',
  templateUrl: './editar-inscripciones.component.html',
  styleUrls: ['./editar-inscripciones.component.css']
})
export class EditarInscripcionesComponent implements OnInit {
  formInscripciones!: FormGroup;
  cursos$: Observable<Cursos[]> = of([] as Cursos[]);
  alumnos$: Observable<Alumnos[]> = of([] as Alumnos[]);
  id = '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private inscripcionService: InscripcionService,
    private toastr: ToastrService,
  ) {
    this.formInscripciones = fb.group({
      curso: new FormControl('', [Validators.required]),
      alumno: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.id = res.get('id') || '';
      this.inscripcionService.obtenerInscripcionPorId(this.id).subscribe(inscripciones => {
        if (inscripciones) {
          this.formInscripciones = this.fb.group({
            curso: new FormControl(inscripciones.curso, [Validators.required]),
            alumno: new FormControl(inscripciones.alumno, [Validators.required])
          });
        }
      })
    })
    this.cursos$ = this.cursoService.obtenerCursos();
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }

  actualizar() {
    if (this.formInscripciones.status === "VALID") {
      this.inscripcionService.editar({id: this.id, ...this.formInscripciones.value} as Inscripciones)
        .subscribe(result => {
          this.toastr.success('todo ok')
        });
    } else {
      this.formInscripciones.markAllAsTouched();
    } 
  }

  // cerrar() {
  //   this.dialogRef.close();
  // }

  compararId(id1: any, id2: any): boolean {
    return id1.id === id2.id;
  }

}
