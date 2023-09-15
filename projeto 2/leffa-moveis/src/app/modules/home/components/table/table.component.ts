import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['cliente', /*...outros nomes de colunas...*/];
  dataSource = [
    { cliente: 'Cliente 1', }
  ];
}
