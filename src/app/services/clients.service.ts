import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url = "https://localhost:7239/api/Clients"

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(this.url);
  }

  createClient(client: any) {
    console.log('Product created', client);
  }

}
