import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Output() onEditProduct: EventEmitter<Product> = new EventEmitter();

  constructor(){ }

  ngOnInit(): void {
  }

  onEdit(product: Product): void {
    this.onEditProduct.emit(product);
  }

}
