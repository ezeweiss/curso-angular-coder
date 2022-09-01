import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../services/curso.service';
import { CrearCursosComponent } from '../crear-cursos/crear-cursos.component';
import { DetalleCursosComponent } from '../detalle-cursos/detalle-cursos.component';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursosSubscription!: Subscription;
  columns: string[] = ['nombreCurso', 'comision','cantidadEstudiantes', 'acciones'];
  dataSource: Cursos[] = [];
  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit(): void {
   this.cursoService.obtenerCursos().subscribe(x =>{
   this.dataSource = x;
   });
    // this.cursosSubscription = this.cursoService.obtenerCursos().subscribe(cursos => {
    //   this.dataSource.data = cursos;
    // });
  }

  // ngOnDestroy(): void {
  //   this.cursosSubscription.unsubscribe();
  // }
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
