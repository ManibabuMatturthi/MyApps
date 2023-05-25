import { IOrder } from 'src/app/models/order.model';
import { OrderserviceService } from './../../../services/order/orderservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.css']
})
export class ListordersComponent implements OnInit {

  orders:IOrder[]
  constructor(private oservice:OrderserviceService) { }

  ngOnInit(): void {

    this.oservice.getAllOrders().subscribe(
      res => this.orders = res
    )
  }

}
