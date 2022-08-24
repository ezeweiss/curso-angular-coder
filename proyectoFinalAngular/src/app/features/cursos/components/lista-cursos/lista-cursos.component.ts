import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Cursos } from 'src/app/models/cursos';
import { CursoService } from '../../services/curso.service';
import { CrearCursosComponent } from '../crear-cursos/crear-cursos.component';
import { EditarCursosComponent } from '../editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursosSubscription!: Subscription;
  columns: string[] = ['nombreCurso', 'comision','cantidadEstudiantes', 'acciones'];
  dataSource: MatTableDataSource <Cursos> = new MatTableDataSource([] as Cursos[]);
  @ViewChild(MatTable) tabla!: MatTable<Cursos>;
  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService
  ) { 
  }

  ngOnInit(): void {
    this.cursosSubscription = this.cursoService.obtenerCursos().subscribe(cursos => {
      this.dataSource.data = cursos;
    });
  }

  ngOnDestroy(): void {
    this.cursosSubscription.unsubscribe();
  }
  crear(){
    const dialogRef = this.dialog.open(CrearCursosComponent,{
      width: '300px',
      data: 'elemento'
    });
    dialogRef.afterClosed().subscribe((res: Cursos) => {
      if(res){
      this.cursoService.agregarCurso(res);
      this.tabla.renderRows();
      }
    })
  }

  editar(elemento: Cursos){
    const dialogRef = this.dialog.open(EditarCursosComponent,{
      width: '300px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe((res: Cursos)=>{
      if(res){
        // const item = this.dataSource.data.find(curso => curso.comision === elemento.comision);
        // const index = this.dataSource.data.indexOf(item!);
        // this.dataSource.data[index] = resultado;
        this.cursoService.editarCurso(res);

      }
    })
  }

  eliminar(elemento: Cursos){
    this.cursoService.eliminarCurso(elemento);
  }
}
