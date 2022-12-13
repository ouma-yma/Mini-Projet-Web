import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsServiceService {

  
  constructor(private http:HttpClient) { }

  addAccount(account:any){
    return this.http.post('http://localhost:4001/account',account)
  }
}
