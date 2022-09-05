import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'home',component: HomeComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./features/alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [AuthGuard, AdminGuard ]
  },
  {
    path: 'cursos',
    loadChildren: () => import('./features/cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./features/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule),
    canActivate: [AuthGuard, AdminGuard]
  },
  {path: 'usuarios',
   loadChildren: () => import('./features/usuarios/usuarios.module').then((m) => m.UsuariosModule),
   canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
