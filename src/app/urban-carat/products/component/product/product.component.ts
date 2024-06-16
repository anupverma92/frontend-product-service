import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem : MenuItem = {};

  constructor() {}

  ngOnInit(): void {
    this.items = [
              { label: 'Dashboard', icon: 'pi pi-home' },
              { label: 'Transactions', icon: 'pi pi-chart-line' },
              { label: 'Products', icon: 'pi pi-list' },
              { label: 'Messages', icon: 'pi pi-inbox' }
          ]
        this.activeItem = this.items[2];
  }

}
