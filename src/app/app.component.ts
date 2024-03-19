import { Component } from '@angular/core';
import { Product, Client, Sell, SellDetail } from './models/sells.model';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD-Autofin';
  
  clients: Client[] = [];
  products: Product[] = [];
  sells: Sell[] = [];
  sellDetails: SellDetail[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }


  getProducts() {
    this.products = this.productsService.getProducts();
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    console.log("Products: ", this.products);
    
  }

  headers1: string[] = ['ID', 'Name'];
  data1: any[] = [
    { id: '1', name: 'Daniel'},
    { id: '2', name: 'Wong'},
    { id: '3', name: 'Lopez'},
  ];

  headers2: string[] = ['ID', 'Name', 'Price'];
  data2: any[] = [
    { id: '1', name: 'Product 1', price: 100},
    { id: '2', name: 'Product 2', price: 200},
    { id: '3', name: 'Product 3', price: 300},
    { id: '4', name: 'Product 4', price: 400},
  ];

  headers3: string[] = ['ID', 'ClientId', 'Total'];
  data3: any[] = [
    { id: '1', clientid: 1, total: 1000},
    { id: '2', clientid: 2, total: 2000},
    { id: '3', clientid: 3, total: 3000},
  ];

  headers4: string[] = ['ID', 'SellId', 'ProductId', 'Price', 'Quantity', 'Total'];
  data4: any[] = [
    { id: '1', sellid: 1, productid: 1, price: 100, quantity: 10, total: 1000},
    { id: '2', sellid: 2, productid: 2, price: 200, quantity: 20, total: 2000},
    { id: '3', sellid: 3, productid: 3, price: 300, quantity: 30, total: 3000},
    { id: '4', sellid: 4, productid: 4, price: 400, quantity: 40, total: 4000},
  ];
}
