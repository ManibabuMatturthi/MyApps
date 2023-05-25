import { UserserviceService } from './../../../../services/user/userservice.service';
import { IUser } from './../../../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  users: IUser[];
  constructor(private uservice: UserserviceService) { }

  ngOnInit(): void {
  
    this.uservice.listAllUSers().subscribe(res => this.users=res)
  
  }

  updateUser(id:number){
    console.log(id);
    
  }

  removeUser(id:number){
    console.log(id);
  }

}
