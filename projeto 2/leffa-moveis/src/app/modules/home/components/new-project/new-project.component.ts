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
    observacao: '',
    cliente_email: '',
    fileToUpload: null as File | null
  };

  constructor(private requestService: RequestService,  private toastService: ToastService) {}

  onBackButtonClicked() {
    this.backButtonClicked.emit();
  }

  submitRequest() {

    const formData = new FormData();
    formData.append('cliente', this.pedido.cliente);
    formData.append('data_pedido', this.pedido.data_pedido);
    formData.append('ambiente', this.pedido.ambiente);
    formData.append('data_entrega', this.pedido.data_entrega);
    formData.append('status', this.pedido.status);
    formData.append('projetista', this.pedido.projetista);
    formData.append('observacao', this.pedido.observacao);
    formData.append('cliente_email', this.pedido.cliente_email);

    // Adicionando o arquivo, se existir
    if (this.pedido.fileToUpload) {
      formData.append('fileToUpload', this.pedido.fileToUpload, this.pedido.fileToUpload.name);
    }

    this.requestService.createRequest(formData).subscribe({
        next: (response) => {
          console.log(this.pedido)
          this.projectCreated.emit();
          //this.onBackButtonClicked()
        },
        error: (error) => {
          this.toastService.showError("Erro ao cadastrar projeto!");
        }
      });
    }
  
    handleFileInput(event: Event): void {
      const element = event.currentTarget as HTMLInputElement;
      let fileList: FileList | null = element.files;
    
      if (fileList) {
        const file = fileList[0];
        this.pedido.fileToUpload = file;
      }
    }
   
}
