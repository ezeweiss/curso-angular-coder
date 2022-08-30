import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './features/alumnos/components/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './features/cursos/components/lista-cursos/lista-cursos.component';
import { ListaInscripcionesComponent } from './features/inscripciones/components/lista-inscripciones/lista-inscripciones.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent}, 
  {path: 'alumnos', component: ListaAlumnosComponent},
  {path: 'cursos', component: ListaCursosComponent},
  {path: 'inscripciones', component: ListaInscripcionesComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
