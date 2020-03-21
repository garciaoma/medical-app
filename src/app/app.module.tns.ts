import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { ListComponent } from './components/products/list/list.component';
import { SharedModule } from './shared/shared.module';
import { DetailsComponent } from './components/products/details/details.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { EditComponent } from './components/products/edit/edit.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

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
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
