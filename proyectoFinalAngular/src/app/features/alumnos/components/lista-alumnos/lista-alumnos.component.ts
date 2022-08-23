import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos';
import { AlumnoService } from '../../services/alumno.service';
import { CrearAlumnosComponent } from '../crear-alumnos/crear-alumnos.component';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnosSubscription!: Subscription;
  columns: string[] = [ 'id','apellido', 'fechaNacimiento','curso', 'comision', 'profesor', 'matriculaAbierta', 'acciones'];
  dataSource: MatTableDataSource <Alumnos> = new MatTableDataSource([] as Alumnos[]);
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;
  constructor(
    private dialog: MatDialog,
    private alumnoService: AlumnoService
  ) { 
  }

  ngOnInit(): void {
    this.alumnosSubscription = this.alumnoService.obtenerAlumnos().subscribe(alumnos => {
      this.dataSource.data = alumnos;
    });
  }

  ngOnDestroy(): void {
    this.alumnosSubscription.unsubscribe();
  }
  crear(){
    const dialogRef = this.dialog.open(CrearAlumnosComponent,{
      width: '300px',
      data: 'elemento'
    });
    dialogRef.afterClosed().subscribe((res: Alumnos) => {
      if(res){
      this.alumnoService.agregarAlumno(res);
      this.tabla.renderRows();
      }
    })
  }

  editar(elemento: Alumnos){
    const dialogRef = this.dialog.open(EditarAlumnosComponent,{
      width: '300px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe((res: Alumnos)=>{
      if(res){
        // const item = this.dataSource.data.find(curso => curso.comision === elemento.comision);
        // const index = this.dataSource.data.indexOf(item!);
        // this.dataSource.data[index] = resultado;
        this.alumnoService.editarAlumno(res);
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Alumnos){
    this.alumnoService.eliminarAlumno(elemento);
  }
}