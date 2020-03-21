import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'AppDetails',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  moduleId: 'module.id'
})
export class DetailsComponent implements OnInit {
  @Input() product: Product;
  @Output() goBack: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGoBack() {
    this.goBack.emit();
  }

  onEdit() {
    this.edit.emit(this.product);
  }
}
