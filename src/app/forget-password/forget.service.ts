import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http:HttpClient) { }

  passwordReset(user:any){
    return this.http.post('http://localhost:4001/passwordReset',user)
  }
}
