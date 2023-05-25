import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from './../../../services/product/productservice.service';
import { IProduct } from 'src/app/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsbycid',
  templateUrl: './productsbycid.component.html',
  styleUrls: ['./productsbycid.component.css']
})
export class ProductsbycidComponent implements OnInit {


  product: IProduct[]
  constructor(private pservice:ProductserviceService,
    private rout:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.rout.snapshot.params['id'];

    this.pservice.getProductsByCid(+id).subscribe(
      res=>this.product = res
    )

  }

  updateProduct(pid:number){
    console.log(pid);
    
  }

  removeProduct(pid:number){
    console.log(pid);
    
  }


}
