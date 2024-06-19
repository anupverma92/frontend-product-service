import { Component, OnInit, Input } from '@angular/core';
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

  hallmark!: any[];
  carats!: any[];
  @Input()
  product!: Product;

  constructor(private productService: ProductService) { }

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

  editProduct() {
      this.editDialog = true;
    }

  hideDialog() {
      this.editDialog = false;
      this.submitted = false;
    }

  saveProduct() {
    this.productService.editProduct(this.product)
    .subscribe(response => {
      this.productService.replaceProduct(response)
      });
    this.editDialog = false;
    }

}
