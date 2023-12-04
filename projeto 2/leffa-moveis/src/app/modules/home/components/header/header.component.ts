import { Component } from '@angular/core';
import { UserService } from 'src/app/containers/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user: any;

  constructor(private userService: UserService) {
    this.userService.user$.subscribe(data => {
      this.user = data
    });
}
}
