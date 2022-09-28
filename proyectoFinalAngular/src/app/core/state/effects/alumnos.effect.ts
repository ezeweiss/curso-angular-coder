import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { cargarAlumnos, alumnosCargados } from '../actions/alumnos.action';
import { AlumnoService } from '../../../features/alumnos/services/alumno.service';
import { Alumnos } from '../../../models/alumnos';

@Injectable()
export class AlumnosEffect {
    cargarAlumnos$ = createEffect(() => this.actions$.pipe(
        ofType(cargarAlumnos),
        mergeMap(() => this.alumnoService.fetchAlumnos().pipe(
            map((a: Alumnos[]) => alumnosCargados({alumnos: a}))
        ))
    ));
    constructor(
        private actions$: Actions,
        private alumnoService: AlumnoService
    ){}
}