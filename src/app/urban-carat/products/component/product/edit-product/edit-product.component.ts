import { Component, OnInit } from '@angular/core';
import { Product } from '../../../type/Product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editDialog: boolean = false;
  submitted: boolean = true;
  product!: Product;
  hallmark!: any[];
  carats!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  editProduct(product: any) {
    this.product = product.productService.products[0];
      console.log(this.product);
      this.editDialog = true;
    }

  hideDialog() {
      this.editDialog = false;
      this.submitted = false;
    }

  saveProduct() {
    //this.productService.editProduct(product.productService.products[0]);
    this.editDialog = false;
    }

}
