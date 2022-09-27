import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AlumnosModule } from '../features/alumnos/alumnos.module';
import { SharedModule } from '../shared/shared.module';
import { CursosModule } from '../features/cursos/cursos.module';
import { HomeComponent } from './components/home/home.component';
import { SpinnerModalComponent } from './components/spinner/spinner-modal.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
 

@NgModule({
  declarations: [
    HomeComponent,
    SpinnerModalComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    AlumnosModule,
    CursosModule,
    MatCheckboxModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class CoreModule { }
