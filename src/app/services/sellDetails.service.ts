import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellDetailsService {

  private url = "https://localhost:7239/api/SellDetails"

  constructor(private http: HttpClient) { }

  getSellDetails() {
    return this.http.get(this.url);
  }

  createSellDetail(sellDetail: any) {
    console.log('SellDetail created', sellDetail);
    return this.http.post(this.url, sellDetail);
  }

}