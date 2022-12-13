import { Component, OnInit } from '@angular/core';
import {ProductsingleService} from './productsingle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  Commentaire:any = [];
  constructor(private Product:ProductsingleService , private router: Router) { }

  ngOnInit(): void {
    this.Product.getAllCommentaire().subscribe(res => {
      console.log(res)
      this.Commentaire =res;
    });  
  }
  createCommentaire(commentaire:any)
  {
    this.Product.createCommentaire(commentaire).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/product-singles']);
      },err=>{
        console.log(err)
      }
    )
    console.log('commenataire created',commentaire);
  }
  getNumber(number:Number)
  {
    this.Product.getNumber(number).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/product-singles']);
      },err=>{
        console.log(err)
      }
    )
    console.log('commenataire number',number);
  }
  
}
