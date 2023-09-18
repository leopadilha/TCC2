import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  requests: any;
  loading: boolean = true;
  error: any;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.getRequest().subscribe(
      data => {
        this.requests = data;
        this.loading = false;
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

  showNewProject = false;

  openNewProjectForm() {
    this.showNewProject = true;
  }

  closeForm() {
    this.showNewProject = false;
  }
}
