import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones';
import { InscripcionService } from '../../services/inscripcion.service';
import { CrearInscripcionesComponent } from '../crear-inscripciones/crear-inscripciones.component';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';
import { ToastrService } from 'ngx-toastr';
import {v4 as uuidv4} from "uuid";
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { AuthService } from '../../../auth/services/auth.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { InscripcionesState } from 'src/app/models/inscripciones.state';
import { Store } from '@ngrx/store';
import { cargarInscripciones } from 'src/app/core/state/actions/inscripciones.action';
import { cargandoInscripcionesSelector } from 'src/app/core/state/selectors/inscripciones.selector';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) cursoTabla!: MatTable<Inscripciones>;
  sesionSubscription!: Subscription;
  sesion!: Sesion;
  inscripcionesSubscription!: Subscription;
  loading$!: Observable<boolean>;
  dataSource: MatTableDataSource<Inscripciones> = new MatTableDataSource([] as Inscripciones[]);
  columns: string[] = ['nombreCurso', 'alumno', 'acciones'];

  constructor(private dialog: MatDialog,
              private inscripcionService: InscripcionService,
              private toastr: ToastrService,
              private router: Router,
              private authService: AuthService,
              private headerService: HeaderService,
              private store: Store<InscripcionesState>,
              private spinnerService: SpinnerService      
  ) {}

  ngOnInit(): void {
    this.headerService.setTitulo("Inscripciones");
    this.store.dispatch(cargarInscripciones());

    this.inscripcionesSubscription = this.inscripcionService.obtenerInscripciones().subscribe(inscripciones => {
      this.dataSource.data = inscripciones;
    });
    this.sesionSubscription = this.authService.obtenerSesion().subscribe({
      next: (sesion)=> {
        this.sesion = sesion;
      }
    });

    this.loading$ = this.store.select(cargandoInscripcionesSelector);
    this.loading$.subscribe(result => {
      if(result){
        this.spinnerService.cargandoTrue();
      }else{
        this.spinnerService.cargandoFalse();
      }
    })
  }

  ngOnDestroy(): void {
    this.headerService.setTitulo("");
    this.inscripcionesSubscription.unsubscribe();
    this.sesionSubscription.unsubscribe();
  }

  editar(inscripcion: Inscripciones) {
    this.router.navigate([`inscripciones/editar/${inscripcion.id}`]);
  }
  
  crear() {
    const dialogRef = this.dialog.open(CrearInscripcionesComponent, {
      width: '300px',
      data: {inscripciones: {id: uuidv4()}}
    });

    dialogRef.afterClosed().subscribe((res: Inscripciones) => {
      if (res) {
        this.inscripcionService.agregarInscripcion(res).subscribe(res => {
         this.toastr.success("Agregado con exito");
         this.cursoTabla.renderRows();
        });
      }
    });
  }

  detalle(inscripcion: Inscripciones) {
    const dialogRef = this.dialog.open(DetalleInscripcionesComponent, {
      width: '300px',
      data: {inscripciones: inscripcion}
    });

    dialogRef.afterClosed().subscribe((res: Inscripciones) => {
      if (res) {
        const item = this.dataSource.data.find(
          (inscripcion: Inscripciones) => inscripcion.id === res.id
        );
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
       
        this.cursoTabla.renderRows();
        this.toastr.success(`${inscripcion.id} - ${inscripcion.curso.nombreCurso} - ${inscripcion.alumno.apellido}, fue editado existosamente!`);
      }
    });
  }
  eliminar(id: string) {
    this.inscripcionService.eliminarInscripcion(id).subscribe((inscripcion: Inscripciones) => {
      this.toastr.success(`${inscripcion.id} - ${inscripcion.curso.nombreCurso} - ${inscripcion.alumno.apellido}, fue eliminado existosamente!`);
      this.ngOnInit();
      });
  }
}

