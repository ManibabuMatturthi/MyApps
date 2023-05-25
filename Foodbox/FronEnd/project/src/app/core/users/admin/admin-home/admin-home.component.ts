import { AdminserviceService } from './../../../../services/admin/adminservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  usrname:string
  constructor(private aservice:AdminserviceService) { }

  ngOnInit(): void {
    this.usrname = <string>sessionStorage.getItem('admin')
  }

}
