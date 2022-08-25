import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AlumnosModule } from '../features/alumnos/alumnos.module';
import { SharedModule } from '../shared/shared.module';
import { CursosModule } from '../features/cursos/cursos.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
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
