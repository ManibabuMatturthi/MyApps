import { Router } from '@angular/router';
import { IUser } from './../../../../models/user.model';
import { UserserviceService } from './../../../../services/user/userservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  usercredentials:IUser;
  message:string;
  msg:string
  userform: FormGroup;
  constructor(private uservice:UserserviceService, private route:Router) { }

  ngOnInit(): void {

   this.userform= new FormGroup({
      city: new FormControl('', Validators.required),
      contry: new FormControl('', Validators.required),
      mob: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),

      usercred: new FormGroup({
        admin: new FormControl(false),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }),
      zipcode: new FormControl('',Validators.required)
    });

    this.usercredentials = new IUser();
    // this.msg = this.message;
  }


   register(){

    this.usercredentials = <IUser>this.userform.value;    
    this.uservice.register(this.usercredentials).subscribe(res => this.msg = res);
    alert("User Created");

    this.route.navigateByUrl('/userlogin');
    
    // console.log(this.msg);
    
  }

}
