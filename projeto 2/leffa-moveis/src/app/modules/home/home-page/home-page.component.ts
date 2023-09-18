import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  loading: boolean = false;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.requestService.loading$.subscribe(loading => this.loading = loading);
  }
  showNewProject = false;

  openNewProjectForm() {
    this.showNewProject = true;
  }

  closeForm() {
    this.showNewProject = false;
  }
}
