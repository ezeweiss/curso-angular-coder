import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {
  formUsuarios: FormGroup;
  usuario: Usuarios;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetalleUsuariosComponent>,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.usuario = data.usuario;
    this.formUsuarios = fb.group({
      usuario: new FormControl({ value: data.usuario.usuario, disabled: true }),
      contrasena: new FormControl( { value: data.usuario.contrasena, disabled: true }),
      admin: new FormControl({ value: data.usuario.admin, disabled: true }),
    });
  }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
