import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaInscripcionesComponent } from './components/lista-inscripciones/lista-inscripciones.component';
import { EditarInscripcionesComponent } from './components/editar-inscripciones/editar-inscripciones.component';

const routes: Routes = [
    {
        path: '',
        children: [
          {path: 'lista', component: ListaInscripcionesComponent},
          {path: 'editar/:id', component: EditarInscripcionesComponent}
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
