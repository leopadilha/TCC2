import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  @Output() newProjectRequested = new EventEmitter<void>();
  @Input() requests: any;
  

  requestNewProject() {
    this.newProjectRequested.emit();
  }
  
}
