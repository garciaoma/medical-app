import { Injectable } from '@angular/core';
import Product from '../../models/product';
import { ProductsDaoService } from '../../daos/products/products.dao.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private productsDaoService: ProductsDaoService) { }

  getAllProducts() : Product [] {
    return this.productsDaoService.getAll();
  }
}
