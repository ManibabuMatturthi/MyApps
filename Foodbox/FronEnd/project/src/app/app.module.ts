import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './main/layout/layout/layout.component';
import { HeadersComponent } from './main/uicontent/headers/headers.component';
import { HomeComponent } from './main/uicontent/home/home.component';
import { FootComponent } from './main/uicontent/foot/foot.component';
import { WorkspaceComponent } from './main/uicontent/home/workspace/workspace.component';
import { AdminHomeComponent } from './core/users/admin/admin-home/admin-home.component';
import { AdminMenuComponent } from './core/users/admin/admin-menu/admin-menu.component';
import { UserHomeComponent } from './core/users/user/user-home/user-home.component';
import { UserMenuComponent } from './core/users/user/user-menu/user-menu.component';
import { AddproductComponent } from './core/products/addproduct/addproduct.component';
import { RemoveproductComponent } from './core/products/removeproduct/removeproduct.component';
import { UpdatestatusComponent } from './core/products/updatestatus/updatestatus.component';
import { UpdateproductComponent } from './core/products/updateproduct/updateproduct.component';
import { AddcategoryComponent } from './core/products/category/addcategory/addcategory.component';
import { ShowcategoryComponent } from './core/products/category/showcategory/showcategory.component';
import { ShowproductsComponent } from './core/products/showproducts/showproducts.component';
import { OrderdetailsComponent } from './core/orders/orderdetails/orderdetails.component';
import { ListordersComponent } from './core/orders/listorders/listorders.component';
import { ShowcartComponent } from './core/cart/showcart/showcart.component';
import { UserordersComponent } from './core/orders/userorders/userorders.component';
import { WelcomeComponent } from './main/uicontent/home/welcome/welcome.component';
import { PagenotfoundComponent } from './main/uicontent/home/pagenotfound/pagenotfound.component';
import { ProductsHomeComponent } from './core/products/products-home/products-home.component';
import { ChangepasswordComponent } from './core/users/user/changepassword/changepassword.component';
import { ListproductsComponent } from './core/products/listproducts/listproducts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminloginComponent } from './core/users/admin/adminlogin/adminlogin.component';
import { ListusersComponent } from './core/users/admin/listusers/listusers.component';
import { UserloginComponent } from './core/users/user/userlogin/userlogin.component';
import { UserSignupComponent } from './core/users/user/user-signup/user-signup.component';
import { ProductsbycidComponent } from './core/products/productsbycid/productsbycid.component';
import { ProductsbypriceComponent } from './core/products/productsbyprice/productsbyprice.component';
import { SearchedprodsComponent } from './core/products/searchedprods/searchedprods.component';
import { SearchprPipe } from './searchpr.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductdetailsComponent } from './core/products/productdetails/productdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeadersComponent,
    HomeComponent,
    FootComponent,
    WorkspaceComponent,
    AdminHomeComponent,
    AdminMenuComponent,
    UserHomeComponent,
    UserMenuComponent,
    AddproductComponent,
    RemoveproductComponent,
    UpdatestatusComponent,
    UpdateproductComponent,
    AddcategoryComponent,
    ShowcategoryComponent,
    ShowproductsComponent,
    OrderdetailsComponent,
    ListordersComponent,
    ShowcartComponent,
    UserordersComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    ProductsHomeComponent,
    ChangepasswordComponent,
    ListproductsComponent,
    AdminloginComponent,
    ListusersComponent,
    UserloginComponent,
    UserSignupComponent,
    ProductsbycidComponent,
    ProductsbypriceComponent,
    SearchedprodsComponent,
    SearchprPipe,
    FilterPipe,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
