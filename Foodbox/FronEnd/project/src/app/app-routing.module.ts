import { ProductdetailsComponent } from './core/products/productdetails/productdetails.component';
import { SearchedprodsComponent } from './core/products/searchedprods/searchedprods.component';
import { ProductsbycidComponent } from './core/products/productsbycid/productsbycid.component';
import { UserSignupComponent } from './core/users/user/user-signup/user-signup.component';
import { UserloginComponent } from './core/users/user/userlogin/userlogin.component';
import { ListusersComponent } from './core/users/admin/listusers/listusers.component';
import { AdminloginComponent } from './core/users/admin/adminlogin/adminlogin.component';
import { UserauthGuard } from './guards/userauth.guard';
import { AdminauthGuard } from './guards/adminauth.guard';
import { ChangepasswordComponent } from './core/users/user/changepassword/changepassword.component';
import { ProductsHomeComponent } from './core/products/products-home/products-home.component';
import { UserordersComponent } from './core/orders/userorders/userorders.component';
import { ShowcartComponent } from './core/cart/showcart/showcart.component';
import { PagenotfoundComponent } from './main/uicontent/home/pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './main/uicontent/home/welcome/welcome.component';
import { OrderdetailsComponent } from './core/orders/orderdetails/orderdetails.component';
import { ListordersComponent } from './core/orders/listorders/listorders.component';
import { UpdateproductComponent } from './core/products/updateproduct/updateproduct.component';
import { AddcategoryComponent } from './core/products/category/addcategory/addcategory.component';
import { ShowcategoryComponent } from './core/products/category/showcategory/showcategory.component';
import { ShowproductsComponent } from './core/products/showproducts/showproducts.component';
import { AddproductComponent } from './core/products/addproduct/addproduct.component';
import { AdminMenuComponent } from './core/users/admin/admin-menu/admin-menu.component';
import { AdminHomeComponent } from './core/users/admin/admin-home/admin-home.component';
import { UserMenuComponent } from './core/users/user/user-menu/user-menu.component';
import { UserHomeComponent } from './core/users/user/user-home/user-home.component';
import { HomeComponent } from './main/uicontent/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import { ListproductsComponent } from './core/products/listproducts/listproducts.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'welcome', component:WelcomeComponent},
  {path:'searchprod/:match', component:SearchedprodsComponent},

  {path:'userlogin', component:UserloginComponent}, 
  {path:'usersignup', component:UserSignupComponent}, 
  {path:'user', component:UserHomeComponent, canActivate:[UserauthGuard], canActivateChild:[UserauthGuard], children:[
  {path:'usermenu', component:UserMenuComponent},  
  {path:'usercart/:id', component: ShowcartComponent},
  {path:'userorders/:id', component:UserordersComponent},
  {path:'orderdetails/:id', component:OrderdetailsComponent},
  {path:'producthome', component:ProductsHomeComponent},
  {path:'changepassword', component:ChangepasswordComponent},
  {path:'productdetails/:id', component:ProductdetailsComponent}


  ]},
  
  {path:'adminlogin', component:AdminloginComponent}, 
  {path:'admin', component:AdminHomeComponent, canActivate:[AdminauthGuard],
  canActivateChild:[AdminauthGuard], children:[    
  {path:'adminmenu', component:AdminMenuComponent},
  {path:'listproducts', component:ListproductsComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'showproducts', component:ShowproductsComponent},
  {path:'category', component:ShowcategoryComponent},
  {path:'addcategory', component:AddcategoryComponent},
  {path:'updateproduct/:id', component:UpdateproductComponent},
  {path:'orders', component:ListordersComponent},
  {path:'orderdetails/:id', component:OrderdetailsComponent},
  {path:'listusers', component:ListusersComponent},
  {path:'listproductsbycuisinid/:id', component:ProductsbycidComponent}

  ]},

  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component:PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
