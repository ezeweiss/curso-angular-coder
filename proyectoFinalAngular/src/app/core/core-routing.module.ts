import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    
    path: '', component: LayoutComponent, children:[
      {
        path: 'alumnos',
        loadChildren: () => import('../features/alumnos/alumnos.module').then((m) => m.AlumnosModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('../features/cursos/cursos.module').then((m) => m.CursosModule)
      },
      {
        path: 'inscripciones',
        loadChildren: () => import('../features/inscripciones/inscripciones.module').then((m) => m.InscripcionesModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import('../features/usuarios/usuarios.module').then((m) => m.UsuariosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
