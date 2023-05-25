import { ICategory } from './../../models/category.model';
import { Router } from '@angular/router';
import { IUser } from './../../models/user.model';
import { Observable } from 'rxjs';
import { ICredentials } from './../../models/credential.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  cred: ICredentials = new ICredentials();
  adminLoggedin: boolean = false;

  baseUrl: string = "http://localhost:8082/api"

  constructor(private httpClient:HttpClient, private router:Router) { }

  login(creden:ICredentials){
    
    if(creden.email === "Admin"){
      if(creden.password === "Admin"){
        sessionStorage.setItem("admin", "Admin")
        this.adminLoggedin=true;
      
        }
      
    }else{
      console.log("invalid Credentials");
    }    
  }
  isAdminLoggedIn() : boolean{
    return this.adminLoggedin;
  }

  logout(){
    sessionStorage.removeItem('admin');
    sessionStorage.removeItem('username');
    this.adminLoggedin = false;
    this.router.navigateByUrl('/adminlogin')
  }

  showCategory():Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(this.baseUrl+"/cuisine");
  }


}
