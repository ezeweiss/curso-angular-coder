import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { SharedModule } from '../../shared/shared.module';
import { AppMaterialModule } from '../../app.material.module';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarAlumnosComponent,
    CrearAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }
