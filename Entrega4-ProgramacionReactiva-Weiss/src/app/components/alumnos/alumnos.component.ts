import { Component, OnInit } from '@angular/core';
import { lastValueFrom,of, Subscription } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos$: Promise<Alumnos[]> = lastValueFrom(of([] as Alumnos[]));
  alumnosMayores: Alumnos[] = [];
  alumnosMayoresSubscription!: Subscription;

  constructor(
    private alumnosService: AlumnosService
  ) { }

  ngOnInit(): void {
    this.alumnos$ = this.alumnosService.obtenerAlumnosPromesa();
    this.alumnosMayoresSubscription = this.alumnosService.obtenerAlumnosMayores()
      .subscribe({
        next: alumnosMayores => {
          this.alumnosMayores = alumnosMayores;
        },
        error: (error)=> {
          console.log(error);
        },
        complete: () => {
          console.log("ok");
        }
      });
  }

  ngOnDestroy(): void {
    this.alumnosMayoresSubscription.unsubscribe();
  }

}
