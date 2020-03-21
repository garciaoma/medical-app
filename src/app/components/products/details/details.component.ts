import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() product: Product;
  @Output() back: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onGoBack() {
    this.back.emit();
  }
}
