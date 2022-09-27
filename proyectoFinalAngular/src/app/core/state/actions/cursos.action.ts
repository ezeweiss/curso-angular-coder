import { createAction, props } from "@ngrx/store"
import { Cursos } from '../../../models/cursos';


export const cargarCursos = createAction(
    '[Lista Cursos] Cargar Cursos'
  )
  export const cargandoCursos = createAction(
    '[Lista Cursos] Cargando Cursos',
    props<{cursos: Cursos[]}>()
  )