import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  tituloSubject!: BehaviorSubject<string>

  constructor() {
    this.tituloSubject = new BehaviorSubject("");
  }

  getTitulo() {
    return this.tituloSubject;
  }
  setTitulo(titulo: string) {
    this.tituloSubject.next(titulo);
  }
}
