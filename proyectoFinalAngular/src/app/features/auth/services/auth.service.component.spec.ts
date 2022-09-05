import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

describe('Pruebas unitarias de AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('Se creó correctamente', () => {
    expect(service).toBeTruthy();
  });
});