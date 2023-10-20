import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/containers/user-service.service';

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

  user: any;

  constructor(public userService: UserService) {
    this.userService.user$.subscribe(data => {
      this.user = data;
    });
}
  
}
