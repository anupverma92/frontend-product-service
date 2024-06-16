import { Component, OnInit } from '@angular/core';
import { Column } from '../../../type/Column';
import { Product } from '../../../type/Product';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  cols!: Column[];
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cols = [
                { field: 'id', header: 'Id' },
                { field: 'articleName', header: 'Name' },
                { field: 'quantity', header: 'Quantity' },
                { field: 'category', header: 'Category' },
                { field: 'material', header: 'Material' },
                { field: 'weight', header: 'Weight' },
                { field: 'articleMaterialPercentage', header: 'Percentage' }
            ];

    this.productService.getAllProducts()
    .subscribe((data: Product[]) => {
                console.log(data);
                this.products = data;
            });
  }

}
