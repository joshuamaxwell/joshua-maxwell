import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.routeConfig?.path == 'products/new'){
      this.product = {
        title:"",
        description:"",
        price:0
      }
    } else {
      this.getProduct();
    }
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(
      product => this.product = product
    )
  }

  onSave(product: Product): void {
    this.productService.updateProduct(product).subscribe()
    this.location.back();
  }

  onCreate(product: Product): void {
    this.productService.createProduct(product).subscribe()
    this.location.back();
  }

}
