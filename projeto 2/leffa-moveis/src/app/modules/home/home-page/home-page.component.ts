import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request-service.service';
import { PageEvent } from '@angular/material/paginator';
import { ToastService } from 'src/app/service/toast-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  requests: any;
  loading: boolean = true;
  error: any;
  currentPage: number = 1;
  totalItems: number = 0;
  pageSize: number = 10; 
  totalPages: number = 1;
  designer: string = '';
  date: string = '';

  constructor(private requestService: RequestService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.getProjects(this.currentPage);
  }

  showNewProject = false;

  getProjects(page: number){
    this.loading = true;
    this.requestService.getRequest(page, this.designer, this.date).subscribe(
      data => {
        this.requests = data.data;
        this.loading = false;
        this.totalItems = data.totalItems;
        this.pageSize = data.pageSize;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  onProjectCreated() {
    this.showNewProject = false;
    this.toastService.showSuccess("Pedido cadastrado com sucesso!");
    this.getProjects(1)
  }

  onPageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.getProjects(this.currentPage);
  }

  openNewProjectForm() {
    this.showNewProject = true;
  }

  closeForm() {
    this.showNewProject = false;
  }

  handleBackButtonClick() {
    this.showNewProject = false;
  }

  onFiltersChanged(filters: {designer: string, date: string}) {
    this.designer = filters.designer;
    this.date = filters.date;
    this.getProjects(this.currentPage);
  }
}
