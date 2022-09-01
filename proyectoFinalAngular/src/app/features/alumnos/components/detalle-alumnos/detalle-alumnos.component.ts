import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones';
import { Alumnos } from '../../../../models/alumnos';
import { InscripcionService } from '../../../inscripciones/services/inscripcion.service';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.component.html',
  styleUrls: ['./detalle-alumnos.component.css']
})
export class DetalleAlumnosComponent implements OnInit {
  inscripciones$: Observable<Inscripciones[]> = of([] as Inscripciones[]);
  formAlumnos: FormGroup;
  alumno: Alumnos;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetalleAlumnosComponent>,
    private inscripcionService: InscripcionService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.alumno = data.alumno;
    this.formAlumnos = fb.group({
      nombre: new FormControl({ value: data.alumno.nombre, disabled: true }),
      apellido: new FormControl( { value: data.alumno.apellido, disabled: true }),
      fechaNacimiento: new FormControl({ value: data.alumno.fechaNacimiento, disabled: true }),
      email: new FormControl({value: data.alumno.email, disabled: true}),
      matriculaAbierta: new FormControl( { value: data.alumno.matriculaAbierta, disabled: true })
    });
  }

  ngOnInit(): void {
     this.inscripcionService.obtenerInscripcionesPorAlumno(this.alumno);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
