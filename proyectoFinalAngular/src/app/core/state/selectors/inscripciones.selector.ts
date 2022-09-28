import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromInscripciones from '../reducers/inscripciones.reducer';
import { InscripcionesState } from "src/app/models/inscripciones.state";

export const inscripcionesSelector = createFeatureSelector<InscripcionesState>(
    fromInscripciones.inscripcionesFeatureKey
  );
  
  export const cargandoInscripcionesSelector = createSelector(
    inscripcionesSelector,
    (estado: InscripcionesState) => estado?.cargando || false
  );
  
  export const inscripcionesCargadasSelector = createSelector(
    inscripcionesSelector,
    (estado: InscripcionesState) => estado?.inscripciones || []
  )
  