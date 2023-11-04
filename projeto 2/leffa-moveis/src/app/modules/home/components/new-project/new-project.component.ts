import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  @Output() backButtonClicked = new EventEmitter<void>();

  selectedStatus = 'Novo';
  selectedProjetista = '';
  selectedEnviroment = '' 

  projetistas = ['', 'Kerolen', 'Leonardo']; 



  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }
}
