import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  @Input() search: string = '';

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      console.log("http response: ", this.products)
      this.products = res;
      console.log("http response: ", this.products)
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(res => {
      this.products = this.products.filter(item => item.id !== id);
    });
  }

  onSearchTerm(term: string) {
    console.log(term);
    this.productsService.getProducts().subscribe(res => {
      this.products = res.filter(item => {
        return item.title.toLowerCase().includes(term.toLocaleLowerCase());
      })
    });
  }

}
