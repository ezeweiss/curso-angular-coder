import { ActionReducerMap } from "@ngrx/store"
import { SesionState } from "src/app/models/sesion.state"
import { usuarioReducer } from "./reducers/sesion.reducer"

export interface AppState{
    sesion: SesionState
  }
  
  export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    sesion: usuarioReducer
  }