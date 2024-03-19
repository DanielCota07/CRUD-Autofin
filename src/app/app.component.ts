import { Component } from '@angular/core';
import { Product, Client, Sell, SellDetail } from './models/sells.model';
import { ProductsService } from './services/products.service';
import { ClientsService } from './services/clients.service';
import { SellService } from './services/sell.service';
import { SellDetailsService } from './services/sellDetails.service';


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

  constructor(
    private productsService: ProductsService, 
    private clientsService: ClientsService, 
    private sellService: SellService, 
    private sellDetailsService: SellDetailsService
  ) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((result: any) => {
      this.products = result;
      console.log("Products", this.products);
    });
    this.clientsService.getClients().subscribe((result: any) => {
      this.clients = result;
      console.log("Clients", this.clients);
    });
    this.sellService.getSells().subscribe((result: any) => {
      this.sells = result;
      console.log("Sells", this.sells);
    });
    this.sellDetailsService.getSellDetails().subscribe((result: any) => {
      this.sellDetails = result;
      console.log("SellDetails", this.sellDetails);
    });

  }

  headers1: string[] = ['ID', 'Name'];
  data1: any[] = [
    { id: '1', name: 'Daniel'},
    { id: '2', name: 'Wong'},
    { id: '3', name: 'Lopez'},
  ];

  headers2: string[] = ['ID', 'Name', 'Price', 'Options'];
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


  showAddProductBool: boolean = false;
  showAddSellBool: boolean = false;

  showAddProduct() {
    this.showAddProductBool = true;
  }

  showAddSell(){
    this.showAddSellBool = true;
  }

  addProduct() {
    let productName = (document.getElementById('productName') as HTMLInputElement).value;
    let productPrice = (document.getElementById('productPrice') as HTMLInputElement).value;
    console.log(productName);
    console.log(productPrice);
  }

  addSell() {
    let clientId = (document.getElementById('clientId') as HTMLInputElement).value;
    let total = (document.getElementById('total') as HTMLInputElement).value;
    console.log(clientId);
    console.log(total);
  }

  closeDialog() {
      this.showAddProductBool = false;
      this.showAddSellBool = false;
  }
}
