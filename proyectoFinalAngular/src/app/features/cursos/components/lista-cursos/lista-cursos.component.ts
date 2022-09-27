import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, of, Subscription } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../services/curso.service';
import { CrearCursosComponent } from '../crear-cursos/crear-cursos.component';
import { DetalleCursosComponent } from '../detalle-cursos/detalle-cursos.component';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';
import { AuthService } from '../../../auth/services/auth.service';
import { Sesion } from '../../../../models/sesion';
import { CursosState } from 'src/app/models/cursos.state';
import { Store } from '@ngrx/store';
import { cargarCursos } from 'src/app/core/state/actions/cursos.action';
import { cargandoCursosSelector, cursosCargadosSelector } from 'src/app/core/state/selectors/cursos.selector';
import { HeaderService } from 'src/app/core/services/header.service';
import { SpinnerService } from '../../../../core/services/spinner.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  sesionSubscription!: Subscription;
  sesion!: Sesion;
  loading$!: Observable<boolean>;
  cursos$!: Observable<Cursos[]>;
  columns: string[] = ['nombreCurso', 'comision','fechaInicio','fechaFin', 'acciones'];
  dataSource$: Observable<MatTableDataSource<Cursos>> =of (new MatTableDataSource([] as Cursos[]));
  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService,
    private toastr: ToastrService,
    private authService: AuthService,
    private store: Store<CursosState>,
    private headerService: HeaderService,
    private spinnerService: SpinnerService
  ) { 
  }

  ngOnInit(): void {
    this.headerService.setTitulo("Cursos");
    this.store.dispatch(cargarCursos());
    
    this.dataSource$ = this.store.select(cursosCargadosSelector).pipe(
      map((result) => {
        return new MatTableDataSource(
          result
        )
      }));
    this.sesionSubscription = this.authService.obtenerSesion().subscribe({
      next: (sesion) => {
        this.sesion = sesion;
      }
    });
    this.loading$ = this.store.select(cargandoCursosSelector);
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
    this.sesionSubscription.unsubscribe();
  }

  crear(){
    const dialogRef = this.dialog.open(CrearCursosComponent,{
      width: '300px',
      data: "element"
    });
    dialogRef.afterClosed().subscribe((curso: Cursos) => {
      if(curso){
      this.cursoService.agregarCurso(curso);
      this.toastr.success(`${curso.id} - ${curso.nombreCurso}, fue agregado exitosamente!`)
      this.ngOnInit();
      }
    })
  }

  editar(curso: Cursos){
    const dialogRef = this.dialog.open(EditarCursosComponent, {
      width: '300px',
      data: curso
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.toastr.success(`${curso.id} - ${curso.nombreCurso}, fue editado exitosamente!`)
        this.ngOnInit();
      }
    })
  }

  detalle(curso: Cursos) {
    this.dialog.open(DetalleCursosComponent, {
      width: '300px',
      data: {curso: curso}
    });
  }

  eliminar(id: string){
    this.cursoService.eliminarCurso(id).subscribe((curso: Cursos) => {
    this.toastr.success(`${curso.id} - ${curso.nombreCurso}, fue eliminado existosamente!`);
    this.ngOnInit();
    });
  }
}
