import { ICategory } from './../../../../models/category.model';
import { AdminserviceService } from './../../../../services/admin/adminservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcategory',
  templateUrl: './showcategory.component.html',
  styleUrls: ['./showcategory.component.css']
})
export class ShowcategoryComponent implements OnInit {

category :ICategory[] 

  constructor(private aservice:AdminserviceService) { }

  ngOnInit(): void {
this.aservice.showCategory().subscribe(
  res => this.category = res
)

  }

}
