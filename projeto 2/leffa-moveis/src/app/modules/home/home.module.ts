import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component' 
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RequestComponent } from './components/request/request.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorMessageComponent } from 'src/app/error-message/error-message.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    TableComponent,
    RequestComponent,
    NewProjectComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
