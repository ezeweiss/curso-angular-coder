import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    imports: [
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatMenuModule,
      MatListModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSlideToggleModule, 
      MatInputModule,
      MatSelectModule,
      MatOptionModule,
      MatCardModule,
      MatProgressSpinnerModule
    ],
    exports:[
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      MatMenuModule,
      MatListModule,
      MatDialogModule,
      MatFormFieldModule,
      MatSlideToggleModule, 
      MatInputModule,
      MatSelectModule,
      MatOptionModule,
      MatCardModule,
      MatProgressSpinnerModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedMaterialModule{}