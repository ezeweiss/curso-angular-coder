import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Inscripciones } from 'src/app/models/inscripciones';
import { InscripcionService } from '../../services/inscripcion.service';
import { EditarInscripcionesComponent } from '../editar-inscripciones/editar-inscripciones.component';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  @ViewChild(MatTable) cursoTable!: MatTable<Inscripciones>;
  inscripcionesSubscription!: Subscription;

  constructor(private dialog: MatDialog,
              private inscripcionService: InscripcionService) {
  }

  dataSource: MatTableDataSource<Inscripciones> = new MatTableDataSource([] as Inscripciones[]);

  columns: string[] = ['nombreCurso', 'alumno', 'acciones'];

  ngOnInit(): void {
    this.inscripcionesSubscription = this.inscripcionService.obtenerInscripciones().subscribe(inscripciones => {
      this.dataSource.data = inscripciones;
    });
  }

  ngOnDestroy(): void {
    this.inscripcionesSubscription.unsubscribe();
  }

  editar(inscripcion: Inscripciones) {
    const dialogRef = this.dialog.open(EditarInscripcionesComponent, {
      width: '300px',
      data: {inscripcion: inscripcion, mode: 'Editar'}
    });

    dialogRef.afterClosed().subscribe((res: Inscripciones) => {
      if (res) {
        const item = this.dataSource.data.find(
          (inscripcion: Inscripciones) => inscripcion.id === res.id
        );
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = res;
        this.cursoTable.renderRows();
      }
    });
  }

  eliminar(inscripcion: Inscripciones) {
    this.inscripcionService.eliminarInscripcion(inscripcion);
  }
}

