import { IProduct } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  baseUrl: string = 'http://localhost:8081/api'
  constructor(private http:HttpClient) { }


  getcurrentcart(uid:number):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseUrl+'/user/cart/'+uid)
  }
   
  addProductToCart(uid:number, pid:number):Observable<boolean>{
    
    console.log('this is cart service');
    console.log(uid);
    return this.http.post<boolean>(this.baseUrl+'/user/product/'+pid+'/'+uid, uid)
    
    
  }

  removeProductfromCart(uid:number, pid:number){
    return this.http.put<string>(this.baseUrl+'/user/products/'+uid+'/'+pid, pid)
  }

  checkout(uid: number){
    return this.http.put<string>(this.baseUrl+'/user/checkout/'+uid, uid)
  }

}
