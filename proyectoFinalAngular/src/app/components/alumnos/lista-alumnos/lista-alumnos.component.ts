import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EditarAlumnosComponent } from '../editar-alumnos/editar-alumnos.component';
import { CrearAlumnosComponent } from '../crear-alumnos/crear-alumnos.component';
import { IfStmt } from '@angular/compiler';
import { Alumnos } from 'src/app/models/alumnos';



const ELEMENT_DATA: Alumnos[] = [
  {nombre: 'Ezequiel', apellido: 'Weiss', fechaNacimiento: ("1997-07-01"), curso: 'Angular', comision: 32110, profesor: 'Abner Garcia', matriculaAbierta: true},
 {nombre: 'Rodolfo', apellido: 'López', fechaNacimiento: '1957-03-04', curso: 'ReactJS', comision: 22110, profesor: 'José González', matriculaAbierta: true},
 {nombre: 'Pablo', apellido: 'Fernández', fechaNacimiento: '1998-08-09', curso: 'Wordpress', comision: 5897, profesor: 'Carlos Zambrano', matriculaAbierta: false},
{nombre: 'Iván', apellido: 'De Pineda', fechaNacimiento: '1975-11-30', curso: 'Marketing Digital', comision: 10257, profesor: 'Fernando Garces', matriculaAbierta: false},
 {nombre: 'Marcos', apellido: 'Jerez', fechaNacimiento: '1995-11-25', curso: 'Python', comision: 5878, profesor: 'Rufino Diaz', matriculaAbierta: true}
];


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  columns: string[] = [ 'apellido', 'fechaNacimiento','curso', 'comision', 'profesor', 'matriculaAbierta', 'acciones'];
  dataSource: MatTableDataSource <Alumnos> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) tabla!: MatTable<Alumnos>;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  crear(){
    const dialogRef = this.dialog.open(CrearAlumnosComponent,{
      width: '300px',
      data: 'elemento'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.dataSource.data.push(res);
      this.tabla.renderRows();
      }
    })
  }

  editar(elemento: Alumnos){
    const dialogRef = this.dialog.open(EditarAlumnosComponent,{
      width: '300px',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(resultado=>{
      if(resultado){
        const item = this.dataSource.data.find(curso => curso.comision === elemento.comision);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = resultado;
        this.tabla.renderRows();
      }
    })
  }

  eliminar(elemento: Alumnos){
    this.dataSource.data = this.dataSource.data.filter((lista: Alumnos) => lista.comision != elemento.comision);
  }
}
