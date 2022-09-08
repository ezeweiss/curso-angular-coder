import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of, Subscription } from 'rxjs';
import { InscripcionService } from 'src/app/features/inscripciones/services/inscripcion.service';
import { Inscripciones } from 'src/app/models/inscripciones';
import { Sesion } from 'src/app/models/sesion';
import { Cursos } from '../../../../models/cursos';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styleUrls: ['./detalle-cursos.component.css']
})
export class DetalleCursosComponent implements OnInit, OnDestroy {
  inscripciones$: Observable<Inscripciones[]> = of([] as Inscripciones[]);
  formCursos: FormGroup;
  curso: Cursos;
  sesion!: Sesion;
  sesionSubscription!: Subscription;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetalleCursosComponent>,
    private inscripcionService: InscripcionService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.curso = data.curso;
    this.formCursos = fb.group({
      nombreCurso: new FormControl({ value: data.curso.nombreCurso, disabled: true }),
      comision: new FormControl( { value: data.curso.comision, disabled: true }),
      fechaInicio: new FormControl({ value: data.curso.fechaInicio, disabled: true }),
      fechaFin: new FormControl({ value: data.curso.fechaFin, disabled: true })
    });
  }

  ngOnInit(): void {
    this.inscripciones$ = this.inscripcionService.obtenerInscripcionesPorCurso(this.curso);
    this.sesionSubscription = this.authService.obtenerSesion().subscribe({
      next: (sesion) => {
        this.sesion = sesion;
      }
    });
  }

  ngOnDestroy(): void{
    this.sesionSubscription.unsubscribe();
  }

  cerrar() {
    this.dialogRef.close();
  }

  trackById(i: number, inscripcion: Inscripciones) {
    return inscripcion.id;
  }

  eliminar(inscripcion: Inscripciones) {
    this.inscripcionService.remove()(inscripcion);
  }
}
