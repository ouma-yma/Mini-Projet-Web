import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private checkout:CartService) { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  } 
  pay(amount: number) {    
    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51M9C7gG1vJGq5bb2KZdDdUGQfdChZGW5Ei6IA9jZ3zUrw3r8C4jvqUEUDmnyClkBFAT0heovlqwKnyoyd79GOode00x55TmJJN',
      locale: 'auto',
      token: function (stripeToken: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(stripeToken)
        alert('Token Created!!');
        payementStripe(stripeToken)
      }
    });
    const payementStripe=(stripeToken:any)=>{
      this.checkout.makePayemet(stripeToken).subscribe((data:any)=>{
        console.log(data)
      })
    }
    handler.open({
      name: ' Shappy Shop',
      description: 'e commerce web site',
      amount: amount
    });
 
  }
 
  loadStripe() {
    if(!window.document.getElementById('stripe-script')) {
      var script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M9C7gG1vJGq5bb2KZdDdUGQfdChZGW5Ei6IA9jZ3zUrw3r8C4jvqUEUDmnyClkBFAT0heovlqwKnyoyd79GOode00x55TmJJN',
          locale: 'auto',
          token: function (stripeToken: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(stripeToken)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(script);
    }
  }
}
