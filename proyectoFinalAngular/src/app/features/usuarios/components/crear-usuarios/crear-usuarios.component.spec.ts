import { DataSource } from '@angular/cdk/collections';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../services/usuario.service';

import { CrearUsuariosComponent } from './crear-usuarios.component';

describe('Pruebas unitarias para CrearUsuariosComponent', () => {
  let component: CrearUsuariosComponent;
  let fixture: ComponentFixture<CrearUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        RouterTestingModule,
        BrowserModule,
        FormsModule,
        MatSlideToggleModule
      ],
      declarations: [ CrearUsuariosComponent ],
      providers: [ToastrService,
        UsuarioService,
        {provide : MatDialogRef, useValue : {}},
        {provide: MAT_DIALOG_DATA, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea componente correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene invalido cuando ingreso un solo campo', () => {
    const formulario = component.formUsuarios;
    const usuario = formulario.controls['usuario'];

    usuario.setValue('Varde_Ebert');

    expect(formulario.invalid).toBeTrue();
  });

  it('El formulario se cambia a válido cuando ingreso los campos requeridos', () => {
    const formulario = component.formUsuarios;
    const usuario = formulario.controls['usuario'];
    const contrasena = formulario.controls['contrasena'];
    const admin = formulario.controls['admin'];

    usuario.setValue('Varde_Ebert');
    contrasena.setValue(1234);
    admin.setValue(true);

    expect(formulario.invalid).toBeFalse();
  });
});
