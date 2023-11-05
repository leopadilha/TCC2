import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h1 mat-dialog-title class="dialog-title">
  Atenção
</h1>
<div mat-dialog-content class="dialog-content">
  Deseja deletar o pedido do cliente {{ data.cliente }}?
</div>
<div mat-dialog-actions class="dialog-actions">
  <button mat-button (click)="onDismiss()" class="custom-orange-button">Não</button>
  <button mat-button (click)="onConfirm()" class="custom-orange-button">Sim</button>
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