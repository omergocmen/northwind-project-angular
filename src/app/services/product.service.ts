import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }

  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    this.apiUrl="http://localhost:3000/products"
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
