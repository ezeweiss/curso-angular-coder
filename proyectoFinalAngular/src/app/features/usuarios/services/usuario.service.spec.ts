import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('Pruebas unitarias en UsuarioService', () => {
  let service: UsuarioService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
    ]});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsuarioService(httpClientSpy as any);
    service = TestBed.inject(UsuarioService);
  });

  it('Se creo el componente', () => {
    expect(service).toBeTruthy();
  });

  it('Retorna lista de usuarios', (done: DoneFn) => {
    const mockDatos = [
      {usuario:"Verda_Ebert",contrasena:"1234",admin:true,id:"1"},
      {usuario:"Emanuel.Kris",contrasena:"Gl8l_fXUgM18xK6",admin:true,id:"3"},
      {usuario:"Roosevelt37",contrasena:"1234",admin:false,id:"4"},
      {usuario:"Mustafa48",contrasena:"mYFC3Dv8ML0tAm0",admin:false,id:"5"},
      {usuario:'Eweiss97', contrasena: '123446', admin: true, id: '6'}
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerUsuarios().subscribe((usuarios) => {
      expect(usuarios).toEqual(mockDatos);
      done();
    })
  });
});
