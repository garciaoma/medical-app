import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { ProductsDaoService } from './daos/products/products.dao.service';



@NgModule({
  declarations: [
    ProductsService,

    ProductsDaoService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsService,

    ProductsDaoService
  ]
})
export class SharedModule { }
