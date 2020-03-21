import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@src/app/shared/services/products/products.service';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'AppList',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  moduleId: 'module.id'
})
export class ListComponent implements OnInit {
  productsList: Product [] = [];
  selectedProduct: Product = undefined;
  editedProduct: Product = undefined;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsList = this.productsService.getAllProducts();
  }

  onSelect(event: Product) {
    this.selectedProduct = event;
  }

  onEdit(event: Product) {
    this.editedProduct = event;
  }

}
