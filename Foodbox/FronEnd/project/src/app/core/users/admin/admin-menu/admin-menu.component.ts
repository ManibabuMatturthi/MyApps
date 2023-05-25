import { Router } from '@angular/router';
import { AdminserviceService } from './../../../../services/admin/adminservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  
  usrname:string;

  constructor(private aservice:AdminserviceService, private router:Router) { }

  ngOnInit(): void {
    this.usrname = <string>sessionStorage.getItem('admin');
  }

  logout(){
      if(confirm("are you sure to logout")){
        this.aservice.logout();
      }
      else{
        this.router.navigateByUrl('/admin')
      }
   }
  

}
