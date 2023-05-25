import { IUser } from './../../../../models/user.model';
import { Router } from '@angular/router';
import { UserserviceService } from './../../../../services/user/userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICredentials } from './../../../../models/credential.model';
import { Component, OnInit } from '@angular/core';
import { authtoken } from 'src/app/models/authtoken.model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userid: string
  cred: ICredentials
  usrlogin: FormGroup
  user: authtoken
  constructor(private uservice: UserserviceService, private router: Router) { }

  ngOnInit(): void {

    this.usrlogin = new FormGroup({
      admin: new FormControl(false),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
   
  }

  login() {
    this.cred = this.usrlogin.value;
    console.log(this.usrlogin.value);
    
    this.uservice.login(this.cred).subscribe(
      result => this.user = result
    );
  

    if(this.user!== null){
      console.log(this.user);
      localStorage.setItem('uid', this.user.id.toString())
      localStorage.setItem('uname',this.user.name)    
      this.uservice.setFlag(this.user.auth);        
      this.router.navigateByUrl('/user')
    }
    else{
      alert("invalid Credentials")
      this.router.navigateByUrl('/userlogin')
    }
   
    

    // if (this.user) {
    //   sessionStorage.setItem('user', JSON.stringify(this.user))
    //   this.router.navigateByUrl('/user');
    // }
    

  }


}
