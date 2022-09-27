import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUsuarios from '../reducers/usuarios.reducer';
import { UsuariosState } from "src/app/models/usuarios.state";

export const usuariosSelector = createFeatureSelector<UsuariosState>(
    fromUsuarios.usuariosFeatureKey
  );
  
  export const cargandoUsuariosSelector = createSelector(
    usuariosSelector,
    (estado: UsuariosState) => estado?.cargando || false
  );
  
  export const usuariosCargadosSelector = createSelector(
    usuariosSelector,
    (estado: UsuariosState) => estado?.usuarios || []
  )
  