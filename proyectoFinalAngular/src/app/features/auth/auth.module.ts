import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './services/auth.service';
import { SharedMaterialModule } from '../../shared/shared.material.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule
  ],
  providers:[
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
