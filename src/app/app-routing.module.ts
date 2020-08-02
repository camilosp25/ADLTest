import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepositsDetailComponent} from './components/deposits-detail/deposits-detail.component';
import {DepositsComponent} from './components/deposits/deposits.component';
import {ProductsComponent} from './components/products/products.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'deposits', component: DepositsComponent },
  { path: 'deposits-detail', component: DepositsDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
