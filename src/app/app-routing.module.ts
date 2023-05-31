import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotPageFoundComponent } from './shared/not-page-found/not-page-found.component';

const routes: Routes = [


  {path: '', redirecto: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotPageFoundComponent},


 ]

@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule

  ],
  
  exports: [
    RouterModule,
    AuthRoutingModule,
    PagesRoutingModule

    ],

})
export class AppRoutingModule { }
