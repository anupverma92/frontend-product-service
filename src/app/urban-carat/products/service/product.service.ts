import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from  '../type/Product';
import { Table } from 'primeng/table';
import { AppConstants } from '../../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products!: Product[];
  public productTable!: Table;

  constructor(private http: HttpClient, private constants: AppConstants) { }

  setData(products: Product[], productTable: Table) {
      this.products = products;
      this.productTable = productTable;
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
      return this.http.get<Product[]>(`${this.constants.BASE_PRODUCT_SERVICE_URL}${this.constants.GET_ALL_PRODUCTS}`);
    }

  saveProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`${this.constants.BASE_PRODUCT_SERVICE_URL}${this.constants.ADD_PRODUCT}`, product);
    }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.constants.BASE_PRODUCT_SERVICE_URL}${this.constants.EDIT_PRODUCT}`, product);
    }

  deleteProduct(productId: number): Observable<Product> {
      return this.http.delete<Product>(`${this.constants.BASE_PRODUCT_SERVICE_URL}${this.constants.DELETE_PRODUCT}${productId}`);
    }
}
