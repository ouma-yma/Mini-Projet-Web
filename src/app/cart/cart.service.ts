import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http:HttpClient) {  }

    //post checkout 

    makePayemet(stripeToken:any):Observable<any>{
      const url="http://localhost:4001/checkout"
      return this.http.post<any>(url,{token:stripeToken})  
  }
}
