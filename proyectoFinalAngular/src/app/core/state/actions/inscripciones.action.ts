import { createAction, props } from "@ngrx/store"
import { Inscripciones } from "src/app/models/inscripciones"

export const cargarInscripciones = createAction(
    '[Lista Inscripciones] Cargar Inscripciones'
  )
  export const cargandoInscripciones = createAction(
    '[Lista Inscripciones] Cargando Inscripciones',
    props<{inscripciones: Inscripciones[]}>()
  )