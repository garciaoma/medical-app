import { Component, OnInit } from '@angular/core';
import Product from '@src/app/shared/models/product';
import { ProductsService } from '@src/app/shared/services/products/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product [];
  selectedProduct: Product;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  onSelectedProduct(event: Product) {
    this.selectedProduct = event;
  }
}
