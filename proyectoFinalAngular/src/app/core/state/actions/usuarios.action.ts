import { createAction, props } from "@ngrx/store"
import { Usuarios } from "src/app/models/usuarios"

export const cargarUsuarios = createAction(
    '[Lista Usuarios] Cargar Usuarios'
  )
  export const cargandoUsuarios = createAction(
    '[Lista Usuarios] Cargando Usuarios',
    props<{usuarios: Usuarios[]}>()
  )