import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { SharedModule } from '../../shared/shared.module';
import { EditarAlumnosComponent } from './components/editar-alumnos/editar-alumnos.component';
import { CrearAlumnosComponent } from './components/crear-alumnos/crear-alumnos.component';
import { AlumnoService } from './services/alumno.service';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { DetalleAlumnosComponent } from './components/detalle-alumnos/detalle-alumnos.component';
import { AlumnosRoutingModule } from './alumnos-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAlumnos from '../../core/state/reducers/alumnos.reducer';
import { AlumnosEffect } from '../../core/state/effects/alumnos.effect';

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
    SharedMaterialModule,
    AlumnosRoutingModule,
    StoreModule.forFeature(fromAlumnos.alumnosFeatureKey, fromAlumnos.alumnosReducer),
    EffectsModule.forFeature([AlumnosEffect])
  ],
  providers: [
    AlumnoService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlumnosModule { }
