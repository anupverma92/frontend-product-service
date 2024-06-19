import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../type/Product';
import { ProductService } from '../../../service/product.service';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  @Input()
  product!: Product;

  constructor(private productService: ProductService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + this.product.articleName + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              this.productService.deleteProduct(this.product.id)
                  .subscribe(response => {this.productService.removeProduct(this.product)});
            },
          reject: () => {
                          this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                      }
      } );
    }

}
