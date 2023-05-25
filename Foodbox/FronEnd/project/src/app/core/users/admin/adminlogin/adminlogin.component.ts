import { ICredentials } from './../../../../models/credential.model';
import { AdminserviceService } from './../../../../services/admin/adminservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  cred: ICredentials;
  admlogin: FormGroup;


  constructor(private aservice:AdminserviceService, private router:Router ) { }

  ngOnInit(): void {
    this.admlogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
        
    this.cred=new ICredentials()

  }
  
  Login(){
    console.log("form submitted");
    this.cred = this.admlogin.value;
    console.log(this.cred);
    console.log(this.cred.email);
    
    this.aservice.login(this.cred);
    // let name = this.cred.email.toString();
    if(this.aservice.isAdminLoggedIn()){
      // sessionStorage.setItem('username',name)
      this.router.navigateByUrl('/admin')
    }
    else{
      alert("invalid Credentials!")
      this.router.navigateByUrl('/adminlogin')
    }
  }


}
