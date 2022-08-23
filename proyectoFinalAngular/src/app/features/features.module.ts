import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared/shared.material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeaturesModule { }
