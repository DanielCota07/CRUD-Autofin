import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  private url = "https://localhost:7239/api/Sells"

  constructor(private http: HttpClient) { }

  getSells() {
    return this.http.get(this.url);
  }

  createSell(sell: any) {
    console.log('Sell created', sell);
  }

}   
