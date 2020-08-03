import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TypeProductPipe } from './pipes/type-product.pipe';
import { CreditsComponent } from './components/credits/credits.component';
import { DepositsComponent } from './components/deposits/deposits.component';
import { CurrentsComponent } from './components/currents/currents.component';
import { CreditcardsComponent } from './components/creditcards/creditcards.component';
import { CdtsComponent } from './components/cdts/cdts.component';
import { CdtsDetailComponent } from './components/cdts-detail/cdts-detail.component';
import { CreditcardsDetailComponent } from './components/creditcards-detail/creditcards-detail.component';
import { CurrentsDetailComponent } from './components/currents-detail/currents-detail.component';
import { DepositsDetailComponent } from './components/deposits-detail/deposits-detail.component';
import { CreditsDetailComponent } from './components/credits-detail/credits-detail.component';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { CreditcardiconPipe } from './pipes/creditcardicon.pipe';
import { TranslationComponent } from './translation/translation.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TypeProductPipe,
    CreditsComponent,
    DepositsComponent,
    CurrentsComponent,
    CreditcardsComponent,
    CdtsComponent,
    CdtsDetailComponent,
    CreditcardsDetailComponent,
    CurrentsDetailComponent,
    DepositsDetailComponent,
    CreditsDetailComponent,
    CreditCardPipe,
    CreditcardiconPipe,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
