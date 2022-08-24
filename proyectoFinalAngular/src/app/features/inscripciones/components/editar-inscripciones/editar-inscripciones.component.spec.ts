import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInscripcionesComponent } from './editar-inscripciones.component';

describe('EditarInscripcionesComponent', () => {
  let component: EditarInscripcionesComponent;
  let fixture: ComponentFixture<EditarInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
