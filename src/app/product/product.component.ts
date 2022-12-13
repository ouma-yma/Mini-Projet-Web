import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  itemsShowCount=12
  selected:any;
  filtered :any;
      stat = [
          { value: "Sort by average rating", id: "123" },
          { value: "Sort by latest", id:"12" },
  
          { value: "Sort by price: low to high",id:"23" },
          // { value: "Unpaid and not sent" ,id:"45"},
          // { value: "Unpaid with due date",id:"56" },
          // { value: "Paid",id:"57" },
          // { value: "Open",id:"78" },
          { value: "Sort by price: high to low" ,id:"45"}];
  
      status = ['Sort by average rating', 'Sort by latest', 'Sort by price: low to high', 'Sort by price: high to low'];

  
  onOptionsSelected() {
        console.log(this.selected); 
        //this.filtered = this.stat.filter(t=>t.value ==this.selected);
  
      }
}
