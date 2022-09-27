import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SpinnerModalComponent } from '../components/spinner/spinner-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  cargando = false;
  dialogRef!: MatDialogRef<SpinnerModalComponent, any>;
  constructor(private dialog: MatDialog) { }

  cargandoTrue(){
    if(this.cargando){
      return;
    }
    this.cargando = true;

    this.dialogRef = this.dialog.open(SpinnerModalComponent, {
      width: '140px',
      panelClass: 'custom-dialog-container'
    });
  }
  cargandoFalse(){
    if(!this.cargando){
      return;
    }
    this.cargando = false;
    if(this.dialogRef){
      this.dialogRef.close();
    }
  }
}
