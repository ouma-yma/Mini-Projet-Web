import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }

  LoginUser(user:any){
    return this.http.post<any>('http://localhost:4001/login',user);
  }

}