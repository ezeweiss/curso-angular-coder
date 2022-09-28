import { createAction, props } from "@ngrx/store"
import { Alumnos } from '../../../models/alumnos';

export const cargarAlumnos = createAction(
    '[Lista Alumnos] Cargar Alumnos'
  )
  export const alumnosCargados = createAction(
    '[Lista Alumnos] Alumnos Cargados',
    props<{alumnos: Alumnos[]}>()
  )