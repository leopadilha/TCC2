import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  @Input() noRequest: any;
  @Input() currentPage: number = 1

  designerFilter: string = '';
  dateFilter: string = '';

  @Output() filterChanged = new EventEmitter<{designer: string, date: string}>();

  constructor(public userService: UserService) {
    this.userService.user$.subscribe(data => {
      this.user = data;
    });
  }
  
  @Output() refreshRequests = new EventEmitter<void>();

  @Output() editProjectRequested = new EventEmitter<any>();

  onEditProject(data: any) {
    this.editProjectRequested.emit(data);
  }

  onRequestDeleted() {
    this.refreshRequests.emit();
  }

  onFilter() {
    this.filterChanged.emit({designer: this.designerFilter, date: this.dateFilter});
  }

  @Output() pageChange = new EventEmitter<PageEvent>();

  onPageChanged(event: PageEvent) {
    this.pageChange.emit(event);
  }

  requestNewProject() {
    this.newProjectRequested.emit();
  }

}
