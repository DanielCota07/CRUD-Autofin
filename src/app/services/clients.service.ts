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
    console.log('Client created', client);
    return this.http.post(this.url, client);
  }

}
