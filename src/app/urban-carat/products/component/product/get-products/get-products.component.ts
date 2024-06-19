import { Component, OnInit, ViewChild } from '@angular/core';
import { Column } from '../../../type/Column';
import { Product } from '../../../type/Product';
import { ProductService } from '../../../service/product.service';
import { Table } from 'primeng/table'

@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {
  cols!: Column[];
  products!: Product[];
  product!: Product;

  @ViewChild('productTable')
  productTable!: Table;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cols = [
                { field: 'id', header: 'Id' },
                { field: 'articleName', header: 'Name' },
                { field: 'quantity', header: 'Quantity' },
                { field: 'category', header: 'Category' },
                { field: 'material', header: 'Material' },
                { field: 'weight', header: 'Weight' },
                { field: 'articleMaterialPercentage', header: 'Percentage' },
                { field: 'articleCostPrice', header: 'Cost Price' },
                { field: 'action', header: 'Action' }
            ];

    this.productService.getAllProducts()
    .subscribe((data: Product[]) => {
                this.products = data;
                //setting this data to access in add Product/Sibling Component
                this.productService.setData(data, this.productTable);
            });
  }

}
