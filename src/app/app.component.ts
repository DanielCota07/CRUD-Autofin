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


}
