import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { SharedMaterialModule } from 'src/app/shared/shared.material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionService } from './services/inscripcion.service';
import { EditarInscripcionesComponent } from './components/editar-inscripciones/editar-inscripciones.component';
import { CrearInscripcionesComponent } from './components/crear-inscripciones/crear-inscripciones.component';
import { DetalleInscripcionesComponent } from './components/detalle-inscripciones/detalle-inscripciones.component';
import { InscripcionesRoutingModule } from './inscripciones-routing-module';

@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarInscripcionesComponent,
    CrearInscripcionesComponent,
    DetalleInscripcionesComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedModule,
    InscripcionesRoutingModule
  ],
  providers:[
    InscripcionService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InscripcionesModule { }
