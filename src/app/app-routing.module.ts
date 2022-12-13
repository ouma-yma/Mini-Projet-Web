import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProductComponent } from './product/product.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { RecuperationComponent } from './recuperation/recuperation.component';

const routes: Routes = [

  {path:"home" , component: HomeComponent},
  // {path:"recuperation" , component: RecuperationComponent},
  {path:"shop" , component: ShopComponent},
  {path:"checkout" , component: CheckoutComponent},
  {path:"product-single" , component: ProductsingleComponent},
  {path:"product" , component: ProductComponent},
  {path:"cart" , component: CartComponent},
  {path:"dashboard" , component: DashboardComponent},
  {path:"order" , component: OrdersComponent}, 
  {path:"address" , component: AddressComponent},
  {path:"forget-password" , component: ForgetPasswordComponent}, 
  {path:"login" , component: LoginComponent},
  {path:"signup" , component: SignupComponent},
  {path:"profile-details" , component: ProfileDetailsComponent},
  {path:"edit" , component: ProfileDetailsComponent},
  {path:"password-reset/:userId/:token" , component: RecuperationComponent},

  {path:"" , redirectTo:"home" , pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
