import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IOrder } from './../../models/order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  orders:IOrder[]
  order:IOrder
  baseUrl: string = 'http://localhost:8082/api'

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.baseUrl+"/orders");
  }

  getOrdersOfUser(uid:number):Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.baseUrl+"/user/orders/"+uid)
  }

  getOrdersbyId(id:number):Observable<IOrder>{
    return this.http.get<IOrder>(this.baseUrl+"/order/"+id)
  }



}
