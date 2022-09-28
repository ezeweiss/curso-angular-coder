import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { cargarCursos, cargandoCursos } from '../actions/cursos.action';
import { Cursos } from '../../../models/cursos';
import { CursoService } from "src/app/features/cursos/services/curso.service";

@Injectable()
export class CursosEffects {
    cargarCursos$ = createEffect(() => this.actions$.pipe(
        ofType(cargarCursos),
        mergeMap(() => this.cursoService.fetchCursos().pipe(
            map((c: Cursos[]) => cargandoCursos({cursos: c}))
        ))
    ));
    constructor(
        private actions$: Actions,
        private cursoService: CursoService
    ){}
}