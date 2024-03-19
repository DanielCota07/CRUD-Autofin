import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "https://localhost:7239/api/Products"

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url);
  }

  getProduct(id: number) {

  }

  createProduct(product: any) {
    console.log('Product created', product);
    console.log('this.url', this.url);
    return this.http.post(this.url, product);
  }

  updateProduct(product: any) {
    console.log('Product updated', product);
  }

  deleteProduct(id: number) {
    console.log('Product deleted', id);
  }

}
