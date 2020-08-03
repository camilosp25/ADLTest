import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepositsDetailComponent} from './components/deposits-detail/deposits-detail.component';
import {DepositsComponent} from './components/deposits/deposits.component';
import {ProductsComponent} from './components/products/products.component';
import {CreditcardsDetailComponent} from './components/creditcards-detail/creditcards-detail.component';
import {CurrentsDetailComponent} from './components/currents-detail/currents-detail.component';
import {CdtsDetailComponent} from './components/cdts-detail/cdts-detail.component';
import {CreditsDetailComponent} from './components/credits-detail/credits-detail.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'deposits', component: DepositsComponent },
  { path: 'deposits-detail', component: DepositsDetailComponent },
  { path: 'creditcards-detail', component: CreditcardsDetailComponent },
  { path: 'currents-detail', component: CurrentsDetailComponent },
  { path: 'cdts-detail', component: CdtsDetailComponent },
  { path: 'credits-detail', component: CreditsDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
