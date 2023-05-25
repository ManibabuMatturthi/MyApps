import { ICategory } from './../../models/category.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  baseUrl: string = "http://localhost:8082/api"

  constructor(private http: HttpClient, private router: Router) { }

  listActiveProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + "/productsbystat");
  }

  listAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + '/products')
  }

  getProductDEtailsByID(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.baseUrl + '/product/' + id);
  }

  getProductsByCid(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + "/products/" + id);
  }

  removeProduct(id: number) {
    return this.http.delete<boolean>(this.baseUrl + '/admin/products/' + id);
    // /api/admin/products/{id}
  }

  updateProduct(id:number, product:IProduct):Observable<IProduct>{
    return this.http.put<IProduct>(this.baseUrl+"/admin/products/"+id,product);
  }

  AddCategory1(name:string):Observable<string>{
    return this.http.post<string>(this.baseUrl+'/admin/'+name, name)
  }

 

}
