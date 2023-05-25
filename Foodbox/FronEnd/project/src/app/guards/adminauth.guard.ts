import { AdminserviceService } from './../services/admin/adminservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate, CanActivateChild {

  constructor(private aservice:AdminserviceService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
    // if(this.aservice.isAdminLoggedIn()){
    //   return true;

    // }
    // else{
    //   return false;
    // }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this.aservice.isAdminLoggedIn()){
      //   return true;  
      // }
      // else{
      //   return false;
      // }
    return true;

  }
  
}
