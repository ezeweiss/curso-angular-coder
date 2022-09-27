import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAlumnos from '../reducers/alumnos.reducer';
import { AlumnosState } from "src/app/models/alumnos.state";

export const alumnosSelector = createFeatureSelector<AlumnosState>(
    fromAlumnos.alumnosFeatureKey
  );
  
  export const cargandoAlumnosSelector = createSelector(
    alumnosSelector,
    (estado: AlumnosState) => estado?.cargando || false
  );
  
  export const alumnosCargadosSelector = createSelector(
    alumnosSelector,
    (estado: AlumnosState) => estado?.alumnos || []
  )