import { UserserviceService } from './../../../../services/user/userservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  id:string
  name: string
  constructor(private router:Router, private usercvice: UserserviceService) { }

  ngOnInit(): void {
    this.id = <string>localStorage.getItem('uid');
    this.name = <string>localStorage.getItem('uname');
    console.log(this.name);
    
  }

  logout(){

    if(confirm('are you sure to logout?')){
      this.usercvice.logout();
      this.router.navigateByUrl('/userlogin')

    }
    console.log("logout");
    
  }

//   myorders(userid:number){
//  console.log(userid);
 
//   }

}
