import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RequestService } from 'src/app/service/request-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Output() newProjectRequested = new EventEmitter<void>();

  request: any[] = [];
  loading: boolean = false;
  error: any = null;

  constructor(private RequestService: RequestService) {}

  ngOnInit(): void {
    this.RequestService.request$.subscribe(data => this.request = data);
    this.RequestService.loading$.subscribe(loading => this.loading = loading);
    this.RequestService.error$.subscribe(error => this.error = error);
    this.RequestService.getProducts();
  }

  requestNewProject() {
    this.newProjectRequested.emit();
  }
  
}
