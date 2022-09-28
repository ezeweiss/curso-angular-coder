import { createReducer, on } from "@ngrx/store";
import { UsuariosState } from "src/app/models/usuarios.state";
import { cargandoUsuarios, cargarUsuarios } from "../actions/usuarios.action";

const estadoInicial: UsuariosState = {
    cargando: false,
    usuarios: []
  }
  export const usuariosFeatureKey = 'usuarios';
  
  export const usuariosReducer = createReducer(
    estadoInicial,
    on(cargarUsuarios, (estado)=>{
      return {...estado, cargando: true}
    }),
    on(cargandoUsuarios, (estado, {usuarios}) => {
      return {...estado,cargando: false, usuarios: usuarios}
    })
  )