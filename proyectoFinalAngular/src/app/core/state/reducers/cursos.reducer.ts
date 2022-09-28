import { createReducer, on } from "@ngrx/store";
import { CursosState } from "src/app/models/cursos.state";
import { cargarCursos, cargandoCursos } from '../actions/cursos.action';


const initialState: CursosState = {
    cargando: false,
    cursos: []
  }
  export const cursosFeatureKey = 'cursos';
  
  export const cursosReducer = createReducer(
    initialState,
    on(cargarCursos, (estado)=>{
      return {...estado, cargando: true}
    }),
    on(cargandoCursos, (estado, {cursos}) => {
      return {...estado,cargando: false, cursos: cursos}
    })
  )