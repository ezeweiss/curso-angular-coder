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
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './features/auth/auth.module';
import { LoginComponent } from './features/auth/components/login/login.component';
import { UsuariosModule } from './features/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent
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
    InscripcionesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    UsuariosModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
