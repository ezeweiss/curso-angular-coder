import { createReducer, on } from "@ngrx/store";
import { AlumnosState } from "src/app/models/alumnos.state";
import { cargarAlumnos, alumnosCargados } from '../actions/alumnos.action';

const initialState: AlumnosState = {
    cargando: false,
    alumnos: []
  }
  export const alumnosFeatureKey = 'alumnos';
  
  export const alumnosReducer = createReducer(
    initialState,
    on(cargarAlumnos, (estado)=>{
      return {...estado, cargando: true}
    }),
    on(alumnosCargados, (estado, {alumnos}) => {
      return {...estado,cargando: false, alumnos: alumnos}
    })
  )