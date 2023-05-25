import { ICategory } from './../../../models/category.model';
import { FormGroup, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/models/product.model';
import { ProductserviceService } from './../../../services/product/productservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  prid: number
  prname: string
  pprice: number
  pdescr: string
  pimgurl: string
  penabled: boolean
  pcategory: ICategory

  updateprod: FormGroup
  pid: number;
 prod: IProduct
product:IProduct

  constructor(private route: ActivatedRoute,
    private router:Router,
    private pservice: ProductserviceService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id']

    this.pservice.getProductDEtailsByID(+this.pid).subscribe(
      res => {
        this.prid = res.pid
        this.prname=res.pname
        this.pprice=res.price
        this.pdescr=res.descr
        this.pimgurl=res.imgurl
        this.penabled=res.enabled
        this.pcategory = res.category       
      }
      
    );
      
      
    this.updateprod = new FormGroup({     
      pname: new FormControl(),
      price: new FormControl(),
      descr: new FormControl(),
      imgurl: new FormControl(),
      enabled: new FormControl(),      
    })    
    this.product= new IProduct();

  }

  updateProduct(){

    this.product.pname = this.updateprod.controls['pname'].value;
    this.product.price = this.pprice;
   this.product.descr=this.pdescr;
   this.product.imgurl = this.pimgurl;
   this.product.enabled=this.penabled 


    this.pservice.updateProduct(this.pid,this.product).subscribe(
      res => this.prod=res
    );

    alert("product details Updated!"+
    "details are:"+
    "/Name: "+this.product.pname+
    "price:"+this.product.price
    )

    this.location.back();
  }

}
