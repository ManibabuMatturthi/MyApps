import { ProductserviceService } from './../../../services/product/productservice.service';
import { UserserviceService } from './../../../services/user/userservice.service';
import { IProduct } from 'src/app/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  products: IProduct[]
deleted:boolean
  constructor(private pservice:ProductserviceService) { }

  ngOnInit(): void {
    this.listProducts()
  }

  listProducts(){
    this.pservice.listAllProducts().subscribe(res => this.products = res);
  }
  
  removeProduct(pid:number){
   
    this.pservice.removeProduct(pid).subscribe(
      res => this.deleted=res
    )
    this.listProducts() 
    
  }

}
