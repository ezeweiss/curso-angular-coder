import { createReducer, on } from "@ngrx/store"
import { SesionState } from "src/app/models/sesion.state"
import { crearSesion } from '../actions/sesion.action';

const estadoInicial: SesionState = {
    sesionActiva: false,
    usuario: {
      id: '',
      usuario:'',
      contrasena: '',
      admin: false
    }
  }
  
  export const usuarioReducer = createReducer(
    estadoInicial,
    on(crearSesion, (estado,{usuario})=>{
      return {...estado, sesionActiva: true, usuario}
    })
  )