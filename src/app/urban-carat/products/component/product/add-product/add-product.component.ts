import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../../type/Product';
import { Table } from 'primeng/table'
import { ProductService } from 'src/app/urban-carat/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [MessageService]
})
export class AddProductComponent implements OnInit {
  product!: Product;
  submitted: boolean = true;
  productDialog: boolean = false;
  carats!: any[];
  hallmark!: any[];
  productTable!: Table;

  constructor(private messageService: MessageService, private productService: ProductService) { }

  ngOnInit(): void {
    this.hallmark = [
      {label: 'Yes', value: true},
      {label: 'No', value: false},
      ];
    this.carats = [
                {label: '24 Ct', value: '24 carat'},
                {label: '22 Ct', value: '22 carat'},
                {label: '20 Ct', value: '20 carat'},
                {label: '18 Ct', value: '18 carat'},
                {label: '14 Ct', value: '14 carat'}
            ];
  }

  openNew() {
    this.product = {} as Product;
    this.submitted = false;
    this.productDialog = true;
  }

  saveProduct() {
    this.submitted = true;
    this.productService.saveProduct(this.product)
    .subscribe(response => {this.productService.addToProducts(response)});
    this.productDialog = false;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.productTable = this.productService.productTable;
    this.productTable.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

}
