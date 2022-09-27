import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuariosComponent } from './components/editar-usuarios/editar-usuarios.component';
import { CrearUsuariosComponent } from './components/crear-usuarios/crear-usuarios.component';
import { DetalleUsuariosComponent } from './components/detalle-usuarios/detalle-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioService } from './services/usuario.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsuarios from '../../core/state/reducers/usuarios.reducer';
import { UsuariosEffects } from 'src/app/core/state/effects/usuarios.effect';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    EditarUsuariosComponent,
    CrearUsuariosComponent,
    DetalleUsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    UsuariosRoutingModule,
    StoreModule.forFeature(fromUsuarios.usuariosFeatureKey, fromUsuarios.usuariosReducer),
    EffectsModule.forFeature([UsuariosEffects])
  ],
  providers: [
    UsuarioService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuariosModule { }
