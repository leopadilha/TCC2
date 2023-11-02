import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

  @Input() errorMessage: string = 'Um erro ocorreu';

  @Output() retry = new EventEmitter<void>();

  onRetry() {
    this.retry.emit();
  }
}