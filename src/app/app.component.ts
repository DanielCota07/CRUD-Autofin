import { Component } from '@angular/core';
import { Product, Client, Sell, SellDetail } from './models/sells.model';
import { ProductsService } from './services/products.service';
import { ClientsService } from './services/clients.service';
import { SellService } from './services/sell.service';
import { SellDetailsService } from './services/sellDetails.service';


interface ClientInterface {
  id: number;
  name: string;
}
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

  headers1: string[] = ['ID', 'Name'];
  data1: any[] = [];
  headers2: string[] = ['ID', 'Name', 'Price', 'Options'];
  data2: any[] = [];
  headers3: string[] = ['ID', 'ClientId', 'Total'];
  data3: any[] = [];
  headers4: string[] = ['ID', 'SellId', 'ProductId', 'Price', 'Quantity', 'Total'];
  data4: any[] = [];

  clientsList: ClientInterface[] | undefined;
  selectedClient: ClientInterface | undefined;

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
      this.data2 = this.products;
    });
    this.clientsService.getClients().subscribe((result: any) => {
      this.clients = result;
      console.log("Clients", this.clients);
      this.data1 = this.clients;
      this.clientsList = this.clients.map((client) => {
        return { id: client.id, name: client.name };
      });
    });
    this.sellService.getSells().subscribe((result: any) => {
      this.sells = result;
      console.log("Sells", this.sells);
      this.data3 = this.sells;
    });
    this.sellDetailsService.getSellDetails().subscribe((result: any) => {
      this.sellDetails = result;
      console.log("SellDetails", this.sellDetails);
      this.data4 = this.sellDetails;
    });
  }


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
    let clientSelected = this.selectedClient
    let total = (document.getElementById('clientTotal') as HTMLInputElement).value;
    console.log(clientSelected);
    console.log(total);
  }

  closeDialog() {
      this.showAddProductBool = false;
      this.showAddSellBool = false;
  }
}
