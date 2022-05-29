import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
  ) { }

  private productsUrl = 'http://localhost:3000/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(id: Number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`
    return this.http.get<Product>(url)
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`
    return this.http.put<Product>(url, product, httpOptions)
  }
}
