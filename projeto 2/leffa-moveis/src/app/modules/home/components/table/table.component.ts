import { Component, EventEmitter, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModal } from 'src/app/components/confirm-modal/confirm-modal.component';
import { RequestService } from 'src/app/service/request-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['cliente', 'ambiente', 'data_entrega', 'data_pedido', 'projetista', 'status',  'actions'];

  @Input() requests: any[] = [];
  @Input() totalItems: number = 0
  @Input() currentPage: number = 1;
  @Output() pageChange = new EventEmitter<PageEvent>()
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @Output() requestDeleted = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private requestService: RequestService, private snackBar: MatSnackBar) {}

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  
    // Retorna a data formatada como DD/MM/YYYY
    return `${utcDate.getUTCDate().toString().padStart(2, '0')}/${(utcDate.getUTCMonth() + 1).toString().padStart(2, '0')}/${utcDate.getUTCFullYear()}`;
  }

  deleteRequest(id: number) {
    this.requestService.deleteRequest(id).subscribe(
      response => {
        this.snackBar.open('Pedido excluído com sucesso!', 'Fechar', {
          duration: 3000
        });
        this.requestDeleted.emit();
      },
      error => {
        this.snackBar.open(error, 'Fechar', {
          duration: 3000
        });
      }
    );
  }

  openDeleteConfirmation(row: any): void {
    const dialogRef = this.dialog.open(ConfirmModal, {
      width: '500px',
      height: '300px',
      data: { cliente: row.cliente }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteRequest(row._id);
      }
    });
  }

}
