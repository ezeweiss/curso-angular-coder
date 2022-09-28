import { createReducer, on } from "@ngrx/store";
import { InscripcionesState } from "src/app/models/inscripciones.state";
import { cargandoInscripciones, cargarInscripciones } from "../actions/inscripciones.action";

const estadoInicial: InscripcionesState = {
    cargando: false,
    inscripciones: []
  }
  export const inscripcionesFeatureKey = 'inscripciones';
  
  export const inscripcionReducer = createReducer(
    estadoInicial,
    on(cargarInscripciones, (estado)=>{
      return {...estado, cargando: true}
    }),
    on(cargandoInscripciones, (estado, {inscripciones}) => {
      return {...estado,cargando: false, inscripciones: inscripciones}
    })
  )