import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SesionState } from '../../../models/sesion.state';

export const usuarioSelector= (estado: AppState) => estado.sesion;
export const sesionSelector = createSelector(
  usuarioSelector,
  (estado: SesionState) => estado
);