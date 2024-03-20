import { Component } from '@angular/core';
import { Product, Client, Sell, SellDetail } from './models/sells.model';
import { ProductsService } from './services/products.service';
import { ClientsService } from './services/clients.service';
import { SellService } from './services/sell.service';
import { SellDetailsService } from './services/sellDetails.service';
import Swal from 'sweetalert2'


interface ClientInterface {
  id: number;
  name: string;
}

interface ProductInterface {
  id: number;
  name: string;
  price: number;
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
  headers3: string[] = ['ID', 'Client', 'Total'];
  data3: any[] = [];
  headers4: string[] = ['ID', 'Sell', 'Product', 'Price', 'Quantity', 'Total'];
  data4: any[] = [];

  clientsList: ClientInterface[] | undefined;
  selectedClient: ClientInterface | undefined;
  productsList: ProductInterface[] | undefined;
  selectedProduct: ProductInterface | undefined;

  showAddProductBool: boolean = false;
  showAddSellBool: boolean = false;
  showAddClientBool: boolean = false;
  showEditProductBool: boolean = false;
  showDeleteProductBool: boolean = false;

  editProductId: number = 0;
  editProductName: string = '';
  editProductPrice: number = 0;
  productToDelete: string = '';

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
      this.productsList = this.products.map((product) => {
        return { id: product.id, name: product.name, price: product.price };
      });
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
      console.log("Data3", this.data3);
      
    });
    this.sellDetailsService.getSellDetails().subscribe((result: any) => {
      this.sellDetails = result;
      console.log("SellDetails", this.sellDetails);
      this.data4 = this.sellDetails;
    });
  }

  reloadTables() {
    this.productsService.getProducts().subscribe((result: any) => {
      this.products = result;
      console.log("Products", this.products);
      this.data2 = this.products;
      this.productsList = this.products.map((product) => {
        return { id: product.id, name: product.name, price: product.price };
      });
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

  showAddProduct() {
    this.showAddProductBool = true;
  }

  showAddSell(){
    this.showAddSellBool = true;
  }

  showAddClient() {
    this.showAddClientBool = true;
  }

  addProduct() {
    let productName = (document.getElementById('productName') as HTMLInputElement).value;
    let productPriceString = (document.getElementById('productPrice') as HTMLInputElement).value;
    let productPrice = parseFloat(productPriceString);
    let product = {
      name: productName,
      price: productPrice
    }
    if (productName === '' || productPriceString === '') {
      Swal.fire({
        icon: "error",
        title: "Por favor llena todos los campos",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('productName') as HTMLInputElement).value = '';
      (document.getElementById('productPrice') as HTMLInputElement).value = '';
      return;
    }
    if(productPrice < 0){
      Swal.fire({
        icon: "error",
        title: "El precio no puede ser negativo",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('productName') as HTMLInputElement).value = '';
      (document.getElementById('productPrice') as HTMLInputElement).value = '';
      return;
    }
    if(productName.length > 30){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede tener más de 30 caracteres",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('productName') as HTMLInputElement).value = '';
      (document.getElementById('productPrice') as HTMLInputElement).value = '';
      return;
    }
    if(productName.trim().length === 0){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede ser solo espacios",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('productName') as HTMLInputElement).value = '';
      (document.getElementById('productPrice') as HTMLInputElement).value = '';
      return;
    }
    this.productsService.createProduct(product).subscribe((result: any) => {
      console.log("Product created2", result);
      this.products.push(result);
      this.data2 = this.products;
      this.reloadTables();
      (document.getElementById('productName') as HTMLInputElement).value = '';
      (document.getElementById('productPrice') as HTMLInputElement).value = '';
      this.closeDialog();
      Swal.fire({
        icon: "success",
        title: "Producto creado",
        showConfirmButton: false,
        timer: 1500
      })
    }, (error) => {
      console.log("Error", error);
      Swal.fire({
        icon: "error",
        title: "Error al crear el producto",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
    });
  }

  addSell() {
    let clientSelected = this.selectedClient
    let productSelected = this.selectedProduct
    let precio = productSelected?.price;
    let cantidad = (document.getElementById('clientCantidad') as HTMLInputElement).value;
    let total = precio !== undefined ? precio * parseInt(cantidad) : 0;
    let sell = {
      client: clientSelected?.id,
      total: total
    }
    if(clientSelected === undefined ){
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona un cliente",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
      this.selectedProduct = undefined;
      this.selectedClient = undefined;
      return;
    }
    if(productSelected === undefined){
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona un producto",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
      this.selectedProduct = undefined;
      this.selectedClient = undefined;
      return;
    }
    if(cantidad === ''){
      Swal.fire({
        icon: "error",
        title: "Por favor llena todos los campos",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
      this.selectedProduct = undefined;
      this.selectedClient = undefined;
      return;
    }
    if(parseInt(cantidad) < 0){
      Swal.fire({
        icon: "error",
        title: "La cantidad no puede ser negativa",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
      this.selectedProduct = undefined;
      this.selectedClient = undefined;
      return;
    }
    if(parseInt(cantidad) === 0){
      Swal.fire({
        icon: "error",
        title: "La cantidad no puede ser 0",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
      this.selectedProduct = undefined;
      this.selectedClient = undefined;
      return;
    }
    this.sellService.createSell(sell).subscribe((result: any) => {
      console.log("Sell created", result);
      this.sells.push(result);
      this.data3 = this.sells;
      let sellDetail = {
        sell: result.id,
        product: productSelected?.id,
        price: precio,
        quantity: parseInt(cantidad),
        total: total
      }
      this.sellDetailsService.createSellDetail(sellDetail).subscribe((result: any) => {
        console.log("SellDetail created", result);
        this.sellDetails.push(result);
        this.data4 = this.sellDetails;
        this.reloadTables();
        (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
        this.selectedProduct = undefined;
        this.selectedClient = undefined;
        this.closeDialog();
        Swal.fire({
          icon: "success",
          title: "Venta registrada",
          showConfirmButton: false,
          timer: 1500
        })
      }, (error) => {
        console.log("Error", error);
        Swal.fire({
          icon: "error",
          title: "Error al registrar la venta",
          showConfirmButton: false,
          timer: 1500
        })
        this.closeDialog();
        (document.getElementById('clientCantidad') as HTMLInputElement).value = '';
        this.selectedProduct = undefined;
        this.selectedClient = undefined;
      });
    });
  }

  addClient() {
    let clientName = (document.getElementById('clientName') as HTMLInputElement).value;
    let client = {
      name: clientName
    }
    if (clientName === '') {
      Swal.fire({
        icon: "error",
        title: "Por favor llena el campo",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientName') as HTMLInputElement).value = '';
      return;
    }
    if(clientName.length > 30){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede tener más de 30 caracteres",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientName') as HTMLInputElement).value = '';
      return;
    }
    if(clientName.trim().length === 0){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede ser solo espacios",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientName') as HTMLInputElement).value = '';
      return;
    }
    this.clientsService.createClient(client).subscribe((result: any) => {
      console.log("Client created", result);
      this.clients.push(result);
      this.data1 = this.clients;
      this.reloadTables();
      (document.getElementById('clientName') as HTMLInputElement).value = '';
      this.closeDialog();
      Swal.fire({
        icon: "success",
        title: "Cliente creado",
        showConfirmButton: false,
        timer: 1500
      })
    }, (error) => {
      console.log("Error", error);
      Swal.fire({
        icon: "error",
        title: "Error al crear el cliente",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      (document.getElementById('clientName') as HTMLInputElement).value = '';
    });
  }

  editProduct() {
    let productId = (document.getElementById('editProductId') as HTMLInputElement).value;
    let productName = (document.getElementById('editProductName') as HTMLInputElement).value;
    let productPriceString = (document.getElementById('editProductPrice') as HTMLInputElement).value;
    let productPrice = parseFloat(productPriceString);
    let product = {
      id: parseInt(productId),
      name: productName,
      price: productPrice
    }
    if (productName === '' || productPriceString === '') {
      Swal.fire({
        icon: "error",
        title: "Por favor llena todos los campos",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      return;
    }
    if(productPrice < 0){
      Swal.fire({
        icon: "error",
        title: "El precio no puede ser negativo",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      return;
    }
    if(productName.length > 30){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede tener más de 30 caracteres",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      return;
    }
    if(productName.trim().length === 0){
      Swal.fire({
        icon: "error",
        title: "El nombre no puede ser solo espacios",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
      return;
    }
    this.productsService.updateProduct(product).subscribe((result: any) => {
      console.log("Product updated", result);
      this.reloadTables();
      this.closeDialog();
      Swal.fire({
        icon: "success",
        title: "Producto actualizado",
        showConfirmButton: false,
        timer: 1500
      })
    } , (error) => {
      console.log("Error", error);
      Swal.fire({
        icon: "error",
        title: "Error al actualizar el producto",
        showConfirmButton: false,
        timer: 1500
      })
      this.closeDialog();
    });
  }

  deleteProduct(){
    let productToDelete = this.productToDelete;
    let product = this.products.find((product) => product.name === productToDelete);
    if (product !== undefined) {
      this.productsService.deleteProduct(product.id).subscribe((result: any) => {
        console.log("Product deleted", result);
        this.reloadTables();
        this.closeDialog();
        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
          showConfirmButton: false,
          timer: 1500
        })
      } , (error) => {
        console.log("Error", error);
        Swal.fire({
          icon: "error",
          title: "Error al eliminar el producto",
          showConfirmButton: false,
          timer: 1500
        })
        this.closeDialog();
      });
    }
  }

  closeDialog() {
      this.showAddProductBool = false;
      this.showAddSellBool = false;
      this.showAddClientBool = false;
      this.showEditProductBool = false;
      this.showDeleteProductBool = false;
  }

  onEditarclick(event: any) {
    this.showEditProductBool = true;
    this.editProductId = event.id;
    this.editProductName = event.name;
    this.editProductPrice = event.price;
}

  onEliminarclick(event: any) {
      console.log('Eliminar fila:', event);
      this.productToDelete = event.name;
      this.showDeleteProductBool = true;
  }
}
