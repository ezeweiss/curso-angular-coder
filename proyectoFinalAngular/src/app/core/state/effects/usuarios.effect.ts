import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { UsuarioService } from "src/app/features/usuarios/services/usuario.service";
import { Usuarios } from "src/app/models/usuarios";
import { cargandoUsuarios, cargarUsuarios } from "../actions/usuarios.action";

@Injectable()
export class UsuariosEffects {
    cargarUsuarios$ = createEffect(() => this.actions$.pipe(
        ofType(cargarUsuarios),
        mergeMap(() => this.usuarioService.fetchUsuarios().pipe(
            map((u: Usuarios[]) => cargandoUsuarios({usuarios: u}))
        ))
    ));
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}
}