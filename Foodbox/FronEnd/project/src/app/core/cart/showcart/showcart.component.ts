import { IProduct } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from './../../../services/cart/cartservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {

  msg : string
  pid:number
  uid: number
  products:IProduct[]
  constructor(private cservice:CartserviceService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uid=this.route.snapshot.params['id']
    this.getCart();
  }

  removePRoduct(pid:number, uid:number){
    console.log(pid);
    this.cservice.removeProductfromCart(uid, pid).subscribe(
      res=>console.log(res)      
    )

    this.getCart();
  }

  checkout(uid:number){
    console.log(uid);
    this.cservice.checkout(uid).subscribe(
      res =>this.msg = res
    )
    
    this.getCart();
    
  }

  getCart(){
    this.cservice.getcurrentcart(this.uid).subscribe(
      res => this.products = res
    )
  }


}
