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
    UsuariosRoutingModule
  ],
  providers: [
    UsuarioService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsuariosModule { }
