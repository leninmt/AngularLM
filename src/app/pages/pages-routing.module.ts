import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from '../shared/not-page-found/not-page-found.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';

const routes: Routes = [
  //rutas protegidas
  {path: 'dashboard',
  component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'product', component: ProductComponent},
    {path: 'category', component: CategoryComponent},
    {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  ]},


  //{path: '', component: DashboardComponent},
  //{path: '**', component: NotPageFoundComponent},


 ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    

  ]
})
export class PagesRoutingModule { }
