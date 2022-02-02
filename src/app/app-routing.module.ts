import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-list/:id', component: DetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
