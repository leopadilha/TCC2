import { Component, EventEmitter, Output } from '@angular/core';
import { RequestService } from 'src/app/service/request-service.service';
import { ToastService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  @Output() backButtonClicked = new EventEmitter<void>();
  @Output() projectCreated = new EventEmitter<any>();

  selectedStatus = 'Novo';
  selectedProjetista = '';
  selectedEnviroment = '' 

  projetistas = ['', 'Kerolen', 'Leonardo']; 

  pedido = {
    cliente: '',
    data_pedido: '',
    ambiente: '',
    data_entrega: '',
    status: '',
    projetista: '',
    observacao: ''
  };

  constructor(private requestService: RequestService,  private toastService: ToastService) {}

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }

  submitRequest() {
    this.requestService.createRequest(this.pedido).subscribe({
        next: (response) => {
          this.projectCreated.emit();
          //this.onBackButtonClicked()
        },
        error: (error) => {
          this.toastService.showError("Erro ao cadastrar projeto!");
        }
      });
    }
}
