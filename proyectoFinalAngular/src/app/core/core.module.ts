import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AlumnosModule } from '../features/alumnos/alumnos.module';
import { SharedModule } from '../shared/shared.module';
import { CursosModule } from '../features/cursos/cursos.module';
import { SharedMaterialModule } from '../shared/shared.material.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    AlumnosModule,
    CursosModule
  ]
})
export class CoreModule { }
