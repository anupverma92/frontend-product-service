import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SelectButtonModule } from 'primeng/selectbutton';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollerModule } from 'primeng/scroller';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrbanCaratComponent } from './urban-carat/urban-carat.component';
import { ProductComponent } from './urban-carat/products/component/product/product.component';
import { AddProductComponent } from './urban-carat/products/component/product/add-product/add-product.component';
import { GetProductsComponent } from './urban-carat/products/component/product/get-products/get-products.component';
import { EditProductComponent } from './urban-carat/products/component/product/edit-product/edit-product.component';
import { DeleteProductComponent } from './urban-carat/products/component/product/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UrbanCaratComponent,
    ProductComponent,
    AddProductComponent,
    GetProductsComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabMenuModule,
    TableModule,
    CommonModule,
    HttpClientModule,
    SelectButtonModule,
    FormsModule,
    CardModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    RadioButtonModule,
    DropdownModule,
    ScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
