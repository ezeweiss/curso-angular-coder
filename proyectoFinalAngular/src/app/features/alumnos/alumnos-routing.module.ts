import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'lista', component: ListaAlumnosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }