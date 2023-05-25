import { IProduct } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { OrderserviceService } from './../../../services/order/orderservice.service';
import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/order.model';

@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {

  orders: IOrder[]
  products: IProduct[]
  prod: number[]
  uid: any
  id:number=1
  constructor(private oservice:OrderserviceService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.uid =  this.activatedRoute.snapshot.params['id'];
    console.log(+this.uid);
    
    this.oservice.getOrdersOfUser(+this.uid).subscribe(
     
        res=> this.orders=res
        
    );
    
  }

}
