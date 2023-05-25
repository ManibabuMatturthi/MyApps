import { UserserviceService } from './../../../../services/user/userservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changepass: FormGroup;
  id:number
  msg: string
  constructor(private router: Router, private uservice:UserserviceService) { }

  ngOnInit(): void {

    this.changepass = new FormGroup({
      newpassword1: new FormControl('',Validators.required),
      newpassword2: new FormControl('',Validators.required)
    })

    this.id = parseInt(<string>localStorage.getItem('uid'))

  }

  changepwd(){

    if(this.changepass.controls['newpassword1'].value===this.changepass.controls['newpassword2'].value){
      
      this.uservice.changeUserPassword(this.id,this.changepass.controls['newpassword1'].value).subscribe(
        res => this.msg = res
      )
      alert(<string>this.msg);
      this.router.navigateByUrl('/user')

    }else{
      alert(<string>this.msg)
      this.router.navigateByUrl('/user/changepassword')
    }
   
  }


}
