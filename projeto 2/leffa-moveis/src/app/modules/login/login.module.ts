import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    LoginRoutingModule
    // ... outros módulos necessários
  ]
})
export class LoginModule { }
