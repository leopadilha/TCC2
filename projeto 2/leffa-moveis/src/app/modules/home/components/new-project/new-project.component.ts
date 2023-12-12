import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  selectedStatus: string = 'Novo';
  selectedProjetista: string = '';
  selectedEnviroment: string = '' 
  isEditMode: boolean = false;
  isLoading: boolean = false
  @Input() projectData: any = null

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
    this.projectData = null
    this.isEditMode = false
    this.backButtonClicked.emit();
  }

  ngOnInit() {
    if (this.projectData) {
      this.isEditMode = true;
      this.fillFormWithData(this.projectData);
    } else {
      this.isEditMode = false;
    }
  }

  fillFormWithData(data: any) {
    this.pedido.cliente = data.cliente;
    this.pedido.ambiente = data.ambiente
    this.pedido.projetista = data.projetista
    this.pedido.data_entrega = new Date(data.data_entrega).toISOString().split('T')[0]
    this.pedido.data_pedido = new Date(data.data_pedido).toISOString().split('T')[0]
    this.pedido.observacao = data.observacao
    this.pedido.status = data.status
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

    if (this.pedido.fileToUpload) {
      formData.append('fileToUpload', this.pedido.fileToUpload, this.pedido.fileToUpload.name);
    }

    if (!this.isEditMode){
      this.isLoading = true
      this.requestService.createRequest(formData).subscribe({
        next: (response) => {
          this.isLoading = false
          this.projectCreated.emit({ type: this.isEditMode ? 'edit' : 'create'});
        },
        error: (error) => {
          this.isLoading = false
          this.toastService.showError("Erro ao cadastrar projeto!");
        }
      });
    }else{
      this.isLoading = true
      this.requestService.editRequest(this.pedido, this.projectData?._id).subscribe({
        next: (response) => {
          this.isLoading = false
          this.projectCreated.emit({ type: this.isEditMode ? 'edit' : 'create'});
        },
        error: (error) => {
          this.isLoading = false
          this.toastService.showError("Erro ao editar pedido");
        }
      });
    }  
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
