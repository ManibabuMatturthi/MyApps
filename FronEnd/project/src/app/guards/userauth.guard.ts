import { UserserviceService } from './../services/user/userservice.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate, CanActivateChild {

  constructor( private uservice: UserserviceService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.uservice.isUserLoggedIn()){
      return true;
    }

    else{
      return false;
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.uservice.isUserLoggedIn()){
        return true;
      }
  
      else{
        return false;
      }
  }
  
}
