import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones';
import { InscripcionService } from '../../services/inscripcion.service';
import { EditarInscripcionesComponent } from '../editar-inscripciones/editar-inscripciones.component';
import { CrearInscripcionesComponent } from '../crear-inscripciones/crear-inscripciones.component';
import { DetalleInscripcionesComponent } from '../detalle-inscripciones/detalle-inscripciones.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  @ViewChild(MatTable) cursoTabla!: MatTable<Inscripciones>;
  inscripcionesSubscription!: Subscription;
  dataSource: Inscripciones[] = [];
  columns: string[] = ['nombreCurso', 'alumno', 'acciones'];

  constructor(private dialog: MatDialog,
              private inscripcionService: InscripcionService,
              private toastr: ToastrService           
  ) {}

  ngOnInit(): void {
    this.inscripcionService.obtenerInscripciones().subscribe(x =>{
      this.dataSource = x;
      });
    // this.inscripcionesSubscription = this.inscripcionService.obtenerInscripciones().subscribe(inscripciones => {
    //   this.dataSource.data = inscripciones;
    // });
  }

  // ngOnDestroy(): void {
  //   this.inscripcionesSubscription.unsubscribe();
  // }

  editar(inscripcion: Inscripciones) {
    const dialogRef = this.dialog.open(EditarInscripcionesComponent, {
      width: '300px',
      data: {inscripcion: inscripcion}
    });

    dialogRef.afterClosed().subscribe((res: Inscripciones) => {
      if (res) {
        const item = this.dataSource.find(
          (inscripcion: Inscripciones) => inscripcion.id === res.id
        );
        const index = this.dataSource.indexOf(item!);
        this.dataSource[index] = res;
        this.cursoTabla.renderRows();
      }
    });
  }

  crear() {
    const dialogRef = this.dialog.open(CrearInscripcionesComponent, {
      width: '300px',
      data: "elemento"
    });

    dialogRef.afterClosed().subscribe((res: Inscripciones) => {
      if (res) {
        this.dataSource.push(res)
        this.cursoTabla.renderRows();
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
        const item = this.dataSource.find(
          (inscripcion: Inscripciones) => inscripcion.id === res.id
        );
        const index = this.dataSource.indexOf(item!);
        this.dataSource[index] = res;
       
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

