import { Usuarios } from './usuarios';
export interface SesionState{
    sesionActiva: boolean;
    usuario?: Usuarios;
  }