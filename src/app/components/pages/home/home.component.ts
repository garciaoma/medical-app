import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@src/app/shared/services/products/products.service';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
