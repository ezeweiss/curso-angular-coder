import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInscripcionesComponent } from './crear-inscripciones.component';

describe('CrearInscripcionesComponent', () => {
  let component: CrearInscripcionesComponent;
  let fixture: ComponentFixture<CrearInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
