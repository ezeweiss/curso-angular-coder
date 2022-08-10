import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaAlumnosComponent } from './components/alumnos/lista-alumnos/lista-alumnos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EditarAlumnosComponent } from './components/alumnos/editar-alumnos/editar-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearAlumnosComponent } from './components/alumnos/crear-alumnos/crear-alumnos.component';
import { JuntarPipe } from './components/pipes/juntar.pipe';
import { TamanioDirective } from './components/directivas/tamanio.directive';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    SidenavComponent,
    EditarAlumnosComponent,
    CrearAlumnosComponent,
    JuntarPipe,
    TamanioDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
