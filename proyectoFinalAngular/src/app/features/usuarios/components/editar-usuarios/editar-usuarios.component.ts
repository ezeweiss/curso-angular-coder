import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.component.html',
  styleUrls: ['./editar-usuarios.component.css']
})
export class EditarUsuariosComponent implements OnInit {
  formUsuarios: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarUsuariosComponent>,
    private usuarioService: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: Usuarios
  ) { 
    this.formUsuarios = fb.group({
      usuario: new FormControl(data.usuario, [Validators.required]),
      contrasena: new FormControl(data.contrasena, [Validators.required]), 
      admin: new FormControl(data.admin, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  actualizar(){
    const usuario: Usuarios = {
      id: this.data.id,
      usuario: this.formUsuarios.value.usuario,
      contrasena: this.formUsuarios.value.contrasena,
      admin: this.formUsuarios.value.admin
    }
    this.usuarioService.modificarUsuario(usuario).subscribe((usuario: Usuarios) => {
      this.dialogRef.close(usuario);
    })
  }

}
