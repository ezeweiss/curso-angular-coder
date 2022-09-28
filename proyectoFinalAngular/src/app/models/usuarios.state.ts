import { Usuarios } from './usuarios';
export interface UsuariosState {
    cargando: boolean;
    usuarios: Usuarios[];
  }