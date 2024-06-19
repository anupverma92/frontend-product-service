import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from  '../type/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products!: Product[];

  private baseUrl = "http://localhost:8080/api/product/v1";

    constructor(private http: HttpClient) { }

    setData(products: Product[]) {
        this.products = products;
      }

    addToProducts(product: Product){
      this.products.push(product);
      }

    replaceProduct(product: Product){

      }

    removeProduct(prod: Product) {
      this.products = this.products.filter((product) => product.id !== prod.id);
     }

    getAllProducts() {
        return this.http.get<Product[]>(`${this.baseUrl}/getAllProducts`);
      }

    saveProduct(product: Product) : Observable<Product> {
      return this.http.post<Product>(`${this.baseUrl}/addProduct`, product);
      }

    editProduct(product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.baseUrl}/editProduct`, product);
      }

    deleteProduct(productId: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}/deleteProduct/${productId}`);
      }



}
