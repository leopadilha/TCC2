import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h1 mat-dialog-title>Atenção!</h1>
  <div mat-dialog-content *ngIf="!isLoading">
    <p>Você tem certeza que deseja apagar o pedido do cliente {{ data.cliente }}?</p>
  </div>
  <div mat-dialog-actions *ngIf="!isLoading">
    <button mat-button (click)="onDismiss()">Cancelar</button>
    <button mat-button color="warn" (click)="onConfirm()">Apagar</button>
  </div>
`,
})
export class ConfirmModal {
  isLoading = false
  constructor(
    public dialogRef: MatDialogRef<ConfirmModal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}