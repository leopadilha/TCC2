import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { UserService } from 'src/app/containers/user-service.service';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  userLogged: string = '';
  role: string = ';'

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService
  ) {}

  onLogin() {
    this.errorMessage = ''
    this.isLoading = true;
    this.authService
      .login({ usuario: this.username, senha: this.password })
      .pipe(
        tap((Response) => {
          this.isLoading = false;
          this.userService.setUser(Response.usuario)
          this.router.navigate(['/home']);
        }),
        catchError((error) => {
          this.isLoading = false;
          this.errorMessage = 'Usuário ou senha inválidos';
          return of(error);
        })
      )
      .subscribe();
  }
}