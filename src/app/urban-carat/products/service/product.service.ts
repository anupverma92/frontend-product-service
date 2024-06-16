import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from  '../type/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/product/v1/getAllProducts";

    constructor(private http: HttpClient) { }

    getAllProducts() {
        return this.http.get<Product[]>(`${this.baseUrl}`);
      }
}
