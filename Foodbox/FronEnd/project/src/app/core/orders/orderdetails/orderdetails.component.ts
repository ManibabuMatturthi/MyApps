import { ProductserviceService } from './../../../services/product/productservice.service';
import { IProduct } from 'src/app/models/product.model';
import { IOrder } from './../../../models/order.model';
import { OrderserviceService } from './../../../services/order/orderservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  oid:number
  id:number
  order:IOrder = new IOrder;
  prod:number[]
  products:IProduct[]

  constructor(private route:ActivatedRoute,
    private router:Router,
    private oservice:OrderserviceService,
    private pservice:ProductserviceService) { }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      
      this.oservice.getOrdersbyId(+this.id).subscribe(
        res =>{
          this.order=res       
          this.oid=res.oid   
          this.prod=res.product
        }
      );
        
     
  }




}
