import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['cliente', 'ambiente', 'data_entrega', 'data_pedido', 'projetista', 'status',  'actions'];

  @Input() requests: any[] = [];
  @Input() totalItems: number = 0

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  }
}
