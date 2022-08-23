import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuntarPipe } from './pipes/juntar.pipe';
import { TamanioDirective } from './directives/tamanio.directive';



@NgModule({
  declarations: [
    JuntarPipe,
    TamanioDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JuntarPipe,
    TamanioDirective
  ]
})
export class SharedModule { }
