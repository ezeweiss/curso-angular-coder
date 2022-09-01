import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './features/alumnos/components/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './features/cursos/components/lista-cursos/lista-cursos.component';
import { ListaInscripcionesComponent } from './features/inscripciones/components/lista-inscripciones/lista-inscripciones.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  // {path: 'home', component: HomeComponent}, 
  // {path: 'alumnos', component: ListaAlumnosComponent},
  // {path: 'cursos', component: ListaCursosComponent},
  // {path: 'inscripciones', component: ListaInscripcionesComponent},
  // {path: 'login', component: LoginComponent}
  {
    path: '', component: HomeComponent, pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
    
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./features/alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./features/cursos/cursos.module').then((m) => m.CursosModule)
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./features/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
