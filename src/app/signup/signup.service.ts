import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http:HttpClient) { }

  registerUser(user:any){
    return this.http.post('http://localhost:4001/register',user)
  }
}