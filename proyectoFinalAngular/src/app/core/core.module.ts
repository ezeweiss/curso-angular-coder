import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { AlumnosModule } from '../features/alumnos/alumnos.module';
import { SharedModule } from '../shared/shared.module';
import { CursosModule } from '../features/cursos/cursos.module';
import { HomeComponent } from './components/home/home.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared/shared.material.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
 

@NgModule({
  declarations: [
    HomeComponent,
    SpinnerComponent,
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule,
    AlumnosModule,
    CursosModule,
    MatCheckboxModule,
    FormsModule,
    SharedMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class CoreModule { }
