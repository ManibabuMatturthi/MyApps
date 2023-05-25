import { FormGroup, FormControl } from '@angular/forms';
import { UserserviceService } from './../../../services/user/userservice.service';
import { AdminserviceService } from './../../../services/admin/adminservice.service';
import { Router } from '@angular/router';
import { AdminloginComponent } from './../../../core/users/admin/adminlogin/adminlogin.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  searchForm: FormGroup


  constructor(private adminauth:AdminserviceService, 
    private userauth:UserserviceService,
    private router:Router ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      match:new FormControl()
    })
  }

  user(){
    console.log("User Selected");
    
  }

  admin(){
    console.log("Admin Selected");    
  }

  isAdmin(){
    if(this.adminauth.isAdminLoggedIn()){
      this.router.navigateByUrl('/admin');
    }
    else{
      this.router.navigateByUrl('/adminlogin');
    }
  }

  isUser(){

    let uid = localStorage.getItem('uid')
    if(!uid===null){
      this.router.navigateByUrl('/user')
    }
    else{
      this.router.navigateByUrl('/userlogin')
    }
    // this.router.navigateByUrl('/user')

  }

  searchproduct(){
   
    console.log(this.searchForm.controls['match'].value);
    this.router.navigateByUrl('/searchprod/'+this.searchForm.controls['match'].value)
    
    
  }

}
