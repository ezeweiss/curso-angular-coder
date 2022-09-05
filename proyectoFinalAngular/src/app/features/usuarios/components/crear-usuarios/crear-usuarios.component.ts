import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  formUsuarios: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CrearUsuariosComponent>,
    private usuarioService: UsuarioService, 
    @Inject(MAT_DIALOG_DATA) public data: Usuarios
  ) {
    this.formUsuarios = fb.group({
    usuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(3)]),
    admin: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }


  cancelar(){
    this.dialogRef.close();
  }

  guardar(){
    const usuario: Usuarios = {
      id: '',
      usuario: this.formUsuarios.value.usuario,
      contrasena: this.formUsuarios.value.contrasena,
      admin: this.formUsuarios.value.admin
    }
    this.usuarioService.agregarUsuario(usuario).subscribe((usuario: Usuarios) => {
      this.dialogRef.close(usuario);
    })
  }
}
