import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { SharedModule } from '../../shared/shared.module';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { AlumnoService } from './services/alumno.service';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { DetalleAlumnosComponent } from './components/detalle-alumnos/detalle-alumnos.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    EditarAlumnosComponent,
    CrearAlumnosComponent,
    DetalleAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  providers: [
    AlumnoService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlumnosModule { }
