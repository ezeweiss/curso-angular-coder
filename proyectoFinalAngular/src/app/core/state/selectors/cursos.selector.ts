import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCursos from '../reducers/cursos.reducer';
import { CursosState } from "src/app/models/cursos.state";


export const cursosSelector = createFeatureSelector<CursosState>(
    fromCursos.cursosFeatureKey
  );
  
  export const cargandoCursosSelector = createSelector(
    cursosSelector,
    (estado: CursosState) => estado?.cargando || false
  );
  
  export const cursosCargadosSelector = createSelector(
    cursosSelector,
    (estado: CursosState) => estado?.cursos || []
  )
  