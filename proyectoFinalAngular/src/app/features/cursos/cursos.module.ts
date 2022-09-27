import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoService } from './services/curso.service';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { EditarCursosComponent } from './components/editar-cursos/editar-cursos.component';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { DetalleCursosComponent } from './components/detalle-cursos/detalle-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCursos from '../../core/state/reducers/cursos.reducer';
import { CursosEffects } from 'src/app/core/state/effects/cursos.effect';

@NgModule({
  declarations: [
    ListaCursosComponent,
    EditarCursosComponent,
    CrearCursosComponent,
    DetalleCursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    CursosRoutingModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.cursosReducer),
    EffectsModule.forFeature([CursosEffects])
  ],
  providers:[
    CursoService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CursosModule { }
