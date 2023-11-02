import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/containers/user-service.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  user: any;

  @Output() newProjectRequested = new EventEmitter<void>();
  @Input() totalItems: number = 0
  @Input() requests: any;
  

  requestNewProject() {
    this.newProjectRequested.emit();
  }

  constructor(public userService: UserService) {
    this.userService.user$.subscribe(data => {
      this.user = data;
    });
}
  
}
