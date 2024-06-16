import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../type/Product';
import { Column } from '../../type/Column';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: MenuItem[] = [];
  menuItems!: MenuItem[];
  activeItem : MenuItem = {};

  products!: Product[];
  cols!: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.menuItems = [{
                                      label: 'File',
                                      items: [{
                                              label: 'New',
                                              icon: 'pi pi-fw pi-plus',
                                              items: [
                                                  {label: 'Project'},
                                                  {label: 'Other'},
                                              ]
                                          },
                                          {label: 'Open'},
                                          {label: 'Quit'}
                                      ]
                                  },
                                  {
                                      label: 'Edit',
                                      icon: 'pi pi-fw pi-pencil',
                                      items: [
                                          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                                          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                                      ]
                                  }];

    this.items = [
              { label: 'Dashboard', icon: 'pi pi-home' },
              { label: 'Transactions', icon: 'pi pi-chart-line' },
              { label: 'Products', icon: 'pi pi-list' },
              { label: 'Messages', icon: 'pi pi-inbox' }
          ]
        this.activeItem = this.items[2];

this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'articleName', header: 'Name' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'category', header: 'Category' },
            { field: 'material', header: 'Material' },
            { field: 'weight', header: 'Weight' },
            { field: 'articleMaterialPercentage', header: 'Percentage' }
        ];

    this.productService.getAllProducts().subscribe((data: Product[]) => {
            console.log(data);
            this.products = data;
        });
  }

}
