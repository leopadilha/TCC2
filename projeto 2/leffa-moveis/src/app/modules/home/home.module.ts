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


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    TableComponent,
    RequestComponent,
    NewProjectComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class HomeModule { }
