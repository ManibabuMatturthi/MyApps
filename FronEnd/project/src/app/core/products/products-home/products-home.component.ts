import { CartserviceService } from './../../../services/cart/cartservice.service';
import { Router } from '@angular/router';
import { UserserviceService } from './../../../services/user/userservice.service';
import { IProduct } from 'src/app/models/product.model';
import { ProductserviceService } from './../../../services/product/productservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

  products: IProduct[];
  uid: number
  added: boolean
  constructor(private pservice:ProductserviceService,
    private uservice:UserserviceService,
    private router:Router,
    private cservice:CartserviceService) { }

  ngOnInit(): void {
    this.pservice.listActiveProducts().subscribe(
      result=> this.products =result
    )
    this.uid= parseInt(<string>localStorage.getItem('uid'))
  }

  addtoCart(pid: number, uid: number){
    
    if(this.uid === null){      
    
      this.router.navigateByUrl('/userlogin')
    }
    else{
      this.cservice.addProductToCart(uid, pid).subscribe(res => this.added = res)
    }

  }
}
