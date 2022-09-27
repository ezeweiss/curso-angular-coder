import { Alumnos } from './alumnos';
export interface AlumnosState {
    cargando: boolean;
    alumnos: Alumnos[];
  }