import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { map, Observable, of, Subscription } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { AlumnoService } from '../../services/alumno.service';
import { CrearAlumnosComponent } from '../crear-alumnos/crear-alumnos.component';
import { DetalleAlumnosComponent } from '../detalle-alumnos/detalle-alumnos.component';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../auth/services/auth.service';
import { Sesion } from 'src/app/models/sesion';
import { AlumnosState } from '../../../../models/alumnos.state';
import { Store } from '@ngrx/store';
import { cargarAlumnos } from '../../../../core/state/actions/alumnos.action';
import { cargandoAlumnosSelector } from '../../../../core/state/selectors/alumnos.selector';
import { HeaderService } from '../../../../core/services/header.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  sesionSubscription!: Subscription;
  sesion!: Sesion;
  columns: string[] = ['apellido', 'fechaNacimiento','email','matriculaAbierta', 'acciones'];
  dataSource$: Observable<MatTableDataSource<Alumnos>> = of(new MatTableDataSource(
    [] as Alumnos[]
  ));
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;
  constructor(
    private dialog: MatDialog,
    private alumnoService: AlumnoService,
    private toastr: ToastrService,
    private authService: AuthService,
    private store: Store<AlumnosState>,
    private headerService: HeaderService,
    private spinnerService: SpinnerService
  ) { 
  }

  ngOnInit(): void {
    this.headerService.setTitulo("Alumnos");
    this.store.dispatch(cargarAlumnos());

    this.dataSource$ = this.alumnoService.obtenerAlumnos().pipe(
      map((result) => {
        return new MatTableDataSource(
          result
        )
      }));

      this.store.select(cargandoAlumnosSelector).subscribe(result => {
      if (result) {
        this.spinnerService.cargandoTrue();
      } else {
        this.spinnerService.cargandoFalse();
      }
    })
    this.sesionSubscription = this.authService.obtenerSesion().subscribe({
      next: (sesion) => {
        this.sesion = sesion;
      }
    });
  }

  ngOnDestroy():void{
    this.headerService.setTitulo("");
    this.sesionSubscription.unsubscribe();
  }

  crear(){
    const dialogRef = this.dialog.open(CrearAlumnosComponent,{
      width: '300px',
      data: "element"
    });
    dialogRef.afterClosed().subscribe((alumno: Alumnos) => {
      if(alumno){
      this.alumnoService.agregarAlumno(alumno);
      this.toastr.success(`${alumno.id} - ${alumno.apellido , alumno.nombre }, fue agregado exitosamente!`)
      this.ngOnInit();
      }
    })
  }

  editar(alumno: Alumnos){
    const dialogRef = this.dialog.open(EditarAlumnosComponent, {
      width: '300px',
      data: alumno
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.toastr.success(`${alumno.id} - ${alumno.apellido, alumno.nombre}, fue editado exitosamente!`)
        this.ngOnInit();
      }
    })
  }

  detalle(alumno: Alumnos) {
    this.dialog.open(DetalleAlumnosComponent, {
      width: '300px',
      data: {alumno: alumno}
    });
  }

  eliminar(id: string){
    this.alumnoService.eliminarAlumno(id).subscribe((alumno: Alumnos) => {
    this.toastr.success(`${alumno.id} - ${alumno.apellido, alumno.nombre}, fue eliminado exitosamente!`);
    this.ngOnInit();
    });
  }
}
