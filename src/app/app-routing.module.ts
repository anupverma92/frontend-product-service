import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './urban-carat/login/login.component';
import { RegisterComponent } from './urban-carat/register/register.component';
import { ProductComponent } from './urban-carat/products/component/product/product.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
