import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from '@src/app/shared/models/product';

@Component({
  selector: 'AppEdit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  moduleId: module.id
})
export class EditComponent implements OnInit {
  @Input() product: Product;
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSave() {

  }

  onCancel() {
    this.cancel.emit();
  }

}
