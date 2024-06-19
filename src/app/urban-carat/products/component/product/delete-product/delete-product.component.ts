import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../type/Product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  @Input()
  product!: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  deleteProduct() {
      console.log(this.product);
      this.productService.deleteProduct(this.product.id)
      .subscribe(response => {this.productService.removeProduct(this.product)});
    }

}
