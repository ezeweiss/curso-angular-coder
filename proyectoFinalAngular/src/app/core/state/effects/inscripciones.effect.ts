import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { InscripcionService } from "src/app/features/inscripciones/services/inscripcion.service";
import { Inscripciones } from "src/app/models/inscripciones";
import { cargandoInscripciones, cargarInscripciones } from "../actions/inscripciones.action";

@Injectable()
export class InscripcionesEffects {
    cargarInscripciones$ = createEffect(() => this.actions$.pipe(
        ofType(cargarInscripciones),
        mergeMap(() => this.inscripcionService.buscarInscripciones().pipe(
            map((i: Inscripciones[]) => cargandoInscripciones({inscripciones: i}))
        ))
    ));
    constructor(
        private actions$: Actions,
        private inscripcionService: InscripcionService
    ){}
}