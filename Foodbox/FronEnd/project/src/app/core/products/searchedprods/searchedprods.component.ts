
import { ProductserviceService } from './../../../services/product/productservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-searchedprods',
  templateUrl: './searchedprods.component.html',
  styleUrls: ['./searchedprods.component.css']
})
export class SearchedprodsComponent implements OnInit {

  matchText: string;
  prods: IProduct[]
  constructor(private rout:ActivatedRoute,
    private pservice:ProductserviceService) { }

  ngOnInit(): void {
    
    this.matchText= this.rout.snapshot.params['match']
    console.log(this.matchText);
    
    this.pservice.listAllProducts().subscribe(
      res => this.prods =res
    )
  }

}
