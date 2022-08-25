import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './core/components/layout/layout.component';
import { AlumnosModule } from './features/alumnos/alumnos.module';
import { SharedMaterialModule } from './shared/shared.material.module';
import { CursosModule } from './features/cursos/cursos.module';
import { InscripcionesModule } from './features/inscripciones/inscripciones.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
    SharedMaterialModule,
    FormsModule,
    CursosModule,
    AlumnosModule,
    InscripcionesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
