import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent
  ],
})
export class PagesModule { }
