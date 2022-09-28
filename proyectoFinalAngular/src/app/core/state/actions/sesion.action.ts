import { createAction, props } from "@ngrx/store";
import { Usuarios } from '../../../models/usuarios';

export const crearSesion = createAction(
    '[Auth Login] Sesion iniciada',
    props<{usuario: Usuarios}>()
  )