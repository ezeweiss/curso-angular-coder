import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { CoreMaterialModule } from './core.material.module';
import { SharedModule } from '../shared/shared.module';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { ListaAlumnosComponent } from '../alumnos/components/lista-alumnos/lista-alumnos.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CoreMaterialModule,
    SharedModule,
    AlumnosModule
  ]
})
export class CoreModule { }
