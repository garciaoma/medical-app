import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/components/pages/home/home.component';
import { LoginComponent } from '@src/app/components/pages/login/login.component';
import { SignupComponent } from '@src/app/components/pages/signup/signup.component';
import { PaymentComponent } from '@src/app/components/pages/payment/payment.component';
import { ListComponent } from '@src/app/components/products/list/list.component';
import { SharedModule } from '@src/app/shared/shared.module.tns';
import { DetailsComponent } from '@src/app/components/products/details/details.component';
import { ProductCardComponent } from '@src/app/components/products/product-card/product-card.component';
import { EditComponent } from '@src/app/components/products/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PaymentComponent,
    ListComponent,
    DetailsComponent,
    ProductCardComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
