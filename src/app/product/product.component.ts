import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() onDeleteProduct: EventEmitter<number> = new EventEmitter();

  constructor(){ }

  ngOnInit(): void {
  }

  onDelete(id: number): void {
    this.onDeleteProduct.emit(id);
  }

}
