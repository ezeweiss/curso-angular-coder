import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InscripcionService } from './services/inscripcion.service';
import { EditarInscripcionesComponent } from './components/editar-inscripciones/editar-inscripciones.component';

@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarInscripcionesComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[
    InscripcionService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InscripcionesModule { }
