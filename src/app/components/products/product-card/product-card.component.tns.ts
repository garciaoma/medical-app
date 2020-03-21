import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'AppProductCard',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  moduleId: module.id
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() select: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    this.select.emit(this.product);
  }

}
