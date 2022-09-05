import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { CrearUsuariosComponent } from '../crear-usuarios/crear-usuarios.component';
import { DetalleUsuariosComponent } from '../detalle-usuarios/detalle-usuarios.component';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  alumnosSubscription!: Subscription;
  columns: string[] = ['usuario', 'contrasena','admin','acciones'];
  dataSource: Usuarios[] = [];
  @ViewChild(MatTable) tabla!: MatTable<Usuarios>;
  constructor(
    private dialog: MatDialog,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(x => {
      this.dataSource = x;
    })
  }

  crear(){
    const dialogRef = this.dialog.open(CrearUsuariosComponent,{
      width: '300px',
      data: "element"
    });
    dialogRef.afterClosed().subscribe((usuario: Usuarios) => {
      if(usuario){
      this.usuarioService.agregarUsuario(usuario);
      this.toastr.success(`${usuario.id} - ${usuario.usuario}, fue agregado exitosamente!`)
      this.ngOnInit();
      }
    })
  }

  editar(usuario: Usuarios){
    const dialogRef = this.dialog.open(EditarUsuariosComponent, {
      width: '300px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.toastr.success(`${usuario.id} - ${usuario.usuario}, fue editado exitosamente!`)
        this.ngOnInit();
      }
    })
  }

  detalle(usuario: Usuarios) {
    this.dialog.open(DetalleUsuariosComponent, {
      width: '300px',
      data: {usuario: usuario}
    });
  }

  eliminar(id: string){
    this.usuarioService.eliminarUsuario(id).subscribe((usuario: Usuarios) => {
    this.toastr.success(`${usuario.id} - ${usuario.usuario}, fue eliminado exitosamente!`);
    this.ngOnInit();
    });
  }
}
