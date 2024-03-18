import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
      { id: 4, name: 'Product 4', price: 400 },
      { id: 5, name: 'Product 5', price: 500 },
    ];
  }

  getProduct(id: number) {
    return { id: 1, name: 'Product 1', price: 100 };
  }

  createProduct(product: any) {
    console.log('Product created', product);
  }

  updateProduct(product: any) {
    console.log('Product updated', product);
  }

  deleteProduct(id: number) {
    console.log('Product deleted', id);
  }

}
