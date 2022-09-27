import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { CrearUsuariosComponent } from '../crear-usuarios/crear-usuarios.component';
import { DetalleUsuariosComponent } from '../detalle-usuarios/detalle-usuarios.component';
import { EditarUsuariosComponent } from '../editar-usuarios/editar-usuarios.component';
import { Sesion } from '../../../../models/sesion';
import { AuthService } from '../../../auth/services/auth.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { UsuariosState } from 'src/app/models/usuarios.state';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/core/state/actions/usuarios.action';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { cargandoUsuariosSelector } from 'src/app/core/state/selectors/usuarios.selector';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  sesionSubscription! : Subscription;
  sesion!: Sesion;
  alumnosSubscription!: Subscription;
  loading$!: Observable<boolean>;
  columns: string[] = ['usuario', 'contrasena','admin','acciones'];
  dataSource: Usuarios[] = [];
  @ViewChild(MatTable) tabla!: MatTable<Usuarios>;
  constructor(
    private dialog: MatDialog,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private authService: AuthService,
    private headerService: HeaderService,
    private store: Store<UsuariosState>,
    private spinnerService: SpinnerService
  ) { 
  }

  ngOnInit(): void {
    this.store.dispatch(cargarUsuarios());

    this.headerService.setTitulo("Usuarios");
    this.usuarioService.obtenerUsuarios().subscribe(x => {
      this.dataSource = x;
    });
    this.sesionSubscription = this.authService.obtenerSesion().subscribe({
      next: (sesion)=> {
        this.sesion = sesion;
      }
    });
    this.loading$ = this.store.select(cargandoUsuariosSelector);
    this.loading$.subscribe(result => {
      if(result){
        this.spinnerService.cargandoTrue();
      }else{
        this.spinnerService.cargandoFalse();
      }
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
