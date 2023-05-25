import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private location: Location,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigateByUrl('/user')
  }

}
