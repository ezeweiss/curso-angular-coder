import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuntarPipe } from './pipes/juntar.pipe';
import { TamanioDirective } from './directives/tamanio.directive';
import { SharedMaterialModule } from './shared.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    JuntarPipe,
    TamanioDirective
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedMaterialModule
  ],
  exports:[
    JuntarPipe,
    TamanioDirective,
    SharedMaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
