import { ICategory } from './../../../../models/category.model';
import { ProductserviceService } from './../../../../services/product/productservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  msg:string 
 addcat : FormGroup;
 categ: ICategory
name:string

  constructor(private pservice: ProductserviceService) { }

  ngOnInit(): void {
    this.addcat = new FormGroup({
      catname: new FormControl()
    })

    this.msg = ''
  }

  addcategory(){
    
    this.name = this.addcat.controls['catname'].value;
    this.pservice.AddCategory1(this.name).subscribe(res => this.msg =res
    );
    alert(this.msg)

  }

}
